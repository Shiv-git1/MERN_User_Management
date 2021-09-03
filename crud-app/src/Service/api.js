import axios from 'axios';

const usersUrl = 'http://localhost:8000/machstatz';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/get_all_users/${id}`);
};

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add_new_user`, user);
};

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/delete_existing_user/${id}`);
};

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user);
}