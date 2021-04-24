import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ImportCard from './Card';

const ListProducts = ({ products, handleDeleteNote, handleEditNote, userSession
    
}) => { 
        
    

    const listItems = products.map((products) => ( // products contiene: { description, name, size, _id, unitaryPrice, imgUrl }
        
        <ImportCard 
            key={products._id}
            products={products} 
            handleDeleteNote={handleDeleteNote}
            handleEditNote={handleEditNote}
        />
    ))
    
    return (    
        <React.Fragment>
            
            {
                (userSession) 
                ?   <CardColumns className={"card-columns"}>
                        {listItems}
                    </CardColumns> 
                : <div></div> 
            }
            
        </React.Fragment>
        
    )

}
export default ListProducts;