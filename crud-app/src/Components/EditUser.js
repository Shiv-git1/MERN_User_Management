import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { editUser, getUsers } from '../Service/api';
import { useHistory, useParams } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
});

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: ''
};

const EditUser = () => {
    const [user, setUser] = useState(initialValues);
    const { first_name, last_name, email, password, username } = user;
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(() => {
        // const loadUserData = async () => {
        //     const response = await getUsers(id);
        //     setUser(response.data);
        // }
        loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getUsers(id);
        console.log(response.data);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        history.push('/get_all_users');
    }

    return (
        <>
            <FormGroup className={classes.container}>
                <Typography variant="h4">Edit User</Typography>
                <FormControl>
                    <InputLabel>First Name</InputLabel>
                    <Input type="text" onChange={(e) => onValueChange(e)} name="first_name" value={first_name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Last Name</InputLabel>
                    <Input type="text" onChange={(e) => onValueChange(e)} name="last_name" value={last_name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input type="email" onChange={(e) => onValueChange(e)} name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input type="password" onChange={(e) => onValueChange(e)} name="password" value={password} />
                </FormControl>
                <FormControl>
                    <InputLabel>Userame</InputLabel>
                    <Input type="text" onChange={(e) => onValueChange(e)} name="username" value={username} />
                </FormControl>

                <Button onClick={() => editUserDetails()} variant="contained" color="primary">Edit User</Button>
            </FormGroup>
        </>
    )
}

export default EditUser;
