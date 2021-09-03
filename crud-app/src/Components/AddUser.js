import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

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
    username: '',
};

const AddUser = () => {
    const [user, setUser] = useState(initialValues);
    const { first_name, last_name, email, password, username } = user;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('/get_all_users');
    }

    return (
        <>
            <FormGroup className={classes.container}>
                <Typography variant="h4">Add User</Typography>
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
                    <InputLabel>Username</InputLabel>
                    <Input type="text" onChange={(e) => onValueChange(e)} name="username" value={username} />
                </FormControl>

                <Button onClick={() => addUserDetails()} variant="contained" color="primary">Add User</Button>
            </FormGroup>
        </>
    )
}

export default AddUser
