import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const ImportForm = ({handleSubmit}) => {
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

    // const handleSubmit = async (data) => {
    //   await saveUser(data)
    // }

    const _handleSubmit = async (e) => {  
        e.preventDefault()
        await handleSubmit({ ...formValues })
        console.log(formValues)
    }

    return (
        <Form onSubmit={_handleSubmit} >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                  type="text" 
                  name="name" 
                //   value={formValues.name}
                  onChange={handleChange} 
                  placeholder="Enter Name" 
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control 
                  type="text" 
                  name="email" 
                //   value={formValues.unitaryPrice}
                  onChange={handleChange} 
                  placeholder="Enter E-Mail" 
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                  type="text" 
                  name="password" 
                //   value={formValues.size}
                  onChange={handleChange} 
                  placeholder="Enter Password" 
                  // onInput = {(e) => {
                  //     e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
                  // }} 
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                  type="text"
                  name="confirm_password" 
                //   value={formValues.description}
                  onChange={handleChange} 
                  placeholder="Confirm Password"
                  // onInput = {(e) => {
                  //     e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
                  // }} 
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