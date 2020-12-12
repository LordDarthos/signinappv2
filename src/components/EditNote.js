import React from 'react';
import Form from './FormEditNote';

const AddNote = ({handleSubmit}) => {
    return (
        <Form handleSubmit={handleSubmit} />
    )
}

export default AddNote