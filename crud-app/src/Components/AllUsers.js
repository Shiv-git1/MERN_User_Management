import { Table, TableCell, TableHead, TableRow, makeStyles, TableBody, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../Service/api';

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#ffffff',
            fontSize: 20
        }
    },
    row: {
        '& > *': {
            fontSize: 20
        }
    }
});

const AllUsers = () => {
    const [machstatz, setMachstatz] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setMachstatz(response.data);
    };

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const classes = useStyle();

    return (
        <>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Username</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        machstatz.map(user => (
                            <TableRow className={classes.row} key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.first_name}</TableCell>
                                <TableCell>{user.last_name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`} >Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteUserData(user._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>

                        ))}
                </TableBody>
            </Table>
        </>
    )
}

export default AllUsers
