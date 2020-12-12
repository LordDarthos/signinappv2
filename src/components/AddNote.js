import React from 'react';
import Form from './FormAddNote';

const AddNote = ({handleSubmit}) => {
    return (
        <Form handleSubmit={handleSubmit} />
    )
}

export default AddNote