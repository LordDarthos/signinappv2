import React from 'react';
import { Card, Button} from 'react-bootstrap';
import PatchForm from './PatchForm';


const ImportCard = ({products, handleDeleteNote, handleEditNote
    // handleOnDelete, handleOnUpdate, handleOnUpdateImg 
}) => {
    
    return (
    <Card >                
        <Card.Body>
        <Card.Title>Title: {products.title}</Card.Title>
        <PatchForm
            _id={products._id}
            handleEditNote={handleEditNote}
            myType={"text"}
            myNameAttr={"title"}
            myPlaceholder={"Enter Title"}
            myNameShow={"Title"}
        />
        <Card.Text>Description: {products.description}</Card.Text>
        <PatchForm
            _id={products._id}
            handleEditNote={handleEditNote}
            myType={"text"}
            myNameAttr={"description"}
            myPlaceholder={"Enter Description"}
            myNameShow={"description"}
            myAs={"textarea"}
            myRows={"3"}
        />
        </Card.Body>
        <Card.Footer>
            {/* <Button href={`/notes/edit-note/${products._id}`} variant="primary" type="button"
            >Update</Button> */}
            <Button variant="secondary" type="button" 
            onClick={() => handleDeleteNote(products._id)}
            >Delete</Button>
        </Card.Footer>
    </Card>
    )
}

export default ImportCard