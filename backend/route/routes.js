import express from 'express';
import { addUser, getUserById, getUsers, editUser, deleteUser } from '../controller/userController.js';

const route = express.Router();

route.get('/get_all_users', getUsers);
route.post('/add_new_user', addUser);
route.get('/get_all_users/:id', getUserById);
route.put('/:id', editUser);
route.delete('/delete_existing_user/:id', deleteUser);

export default route;