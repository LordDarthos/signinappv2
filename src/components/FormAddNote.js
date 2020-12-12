import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const ImportForm = ({handleSubmit}) => {
    const [formValues, setFormValues] = useState({
        title: '',
        description: ''
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
                  name="title" 
                //   value={formValues.name}
                  onChange={handleChange} 
                  placeholder="Enter Title" 
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                  as="textarea"
                  rows="3"
                  type="text" 
                  name="description" 
                //   value={formValues.unitaryPrice}
                  onChange={handleChange} 
                  placeholder="Enter Description" 
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