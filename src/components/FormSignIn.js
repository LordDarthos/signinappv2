import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const ImportForm = ({handleSubmit, handleUser, handleValue}) => {

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value})
        // handleValue(e.target.value)
    }

  
    const _handleSubmit = async (e) => {  
        e.preventDefault()
        await handleSubmit({ ...formValues }) 
    }



    return (
        <Form onSubmit={_handleSubmit} >
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