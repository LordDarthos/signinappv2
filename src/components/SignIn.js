import React from 'react';
import Form from './FormSignIn';

const SignIn = ({handleSubmit, handleUser, handleValue}) => {
    return (
        <Form handleSubmit={handleSubmit} handleUser={handleUser} handleValue={handleValue}/>
    )
}

export default SignIn