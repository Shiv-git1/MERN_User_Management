import User from '../model/userSchema.js';
import bcrypt from 'bcryptjs';

export const getUsers = async (request, response) => {
    try {
        let user = await User.find();
        response.json(user);
    } catch (error) {
        response.json({ message: error.message });
    }
};

export const addUser = async (request, response) => {
    const { email, password, username } = request.body
    let user = await User.findOne({ email });
    if (user) {
        return response.status(400).send('User with the provided email already exist.');
    }

    user = await User.findOne({ username });
    if (user) {
        return response.status(400).send('User with the provided username already exist');
    }

    try {
        user = new User(request.body);
        user.password = await bcrypt.hash(password, 8);
        await user.save();
        response.status(200).send('Created the new user successfully');
    } catch (e) {
        response.status(500).send('Something went wrong. Try again later.');
    }
};

export const getUserById = async (request, response) => {
    const id = request.params.id;

    try {
        const user = await User.findById(id);
        response.json(user);
    } catch (error) {
        response.json({ message: error.message });
    }
};

export const editUser = async (request, response) => {
    const user = request.body;
    const editUser = new User(user);

    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.json(editUser);
    } catch (error) {
        response.json({ message: error.message });
    }
};

export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({ _id: request.params.id });
        response.status(200).send("User deleted successfully");
    } catch (error) {
        response.status(400).send('Unable to delete the user or user may not exist');
    }
};