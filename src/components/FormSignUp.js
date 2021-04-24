import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const ImportForm = ({handleSubmit}) => {

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value})
    }

    const _handleSubmit = async (e) => {  
        e.preventDefault()
        await handleSubmit({ ...formValues })
        handleClick();
    }

    return (
        <Form onSubmit={_handleSubmit} >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                  type="text" 
                  name="name" 
                  onChange={handleChange} 
                  placeholder="Enter Name" 
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control 
                  type="text" 
                  name="email" 
                  onChange={handleChange} 
                  placeholder="Enter E-Mail" 
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                  type="text" 
                  name="password" 
                  onChange={handleChange} 
                  placeholder="Enter Password" 
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                  type="text"
                  name="confirm_password" 
                  onChange={handleChange} 
                  placeholder="Confirm Password"
                />
            </Form.Group>

            <Button variant="primary" type="submit" >
                Submit
            </Button>
            <Button className="mx-2" variant="secondary" type="button" >
                Close
            </Button>
        </Form>
    )
}

export default ImportForm;