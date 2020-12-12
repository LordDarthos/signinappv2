import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ImportCard from './Card';

const ListProducts = ({ products, handleDeleteNote, handleEditNote, userSession
    // handleOnDelete, handleOnUpdate, handleOnUpdateImg 
}) => { 
    // useEffect(() => {
    //     console.log(products)
    // },[])

        
    

    const listItems = products.map((products) => ( // products contiene: { description, name, size, _id, unitaryPrice, imgUrl }
        
        <ImportCard 
            key={products._id}
            products={products} 
            handleDeleteNote={handleDeleteNote}
            handleEditNote={handleEditNote}
            // handleOnDelete={handleOnDelete}
            // handleOnUpdate={handleOnUpdate}
            // handleOnUpdateImg={handleOnUpdateImg}
        />
    ))
    
    return (    
        <React.Fragment>
            
            {
                (userSession) 
                ?   <CardColumns className={"card-columns"}>
                        {listItems}
                    </CardColumns> 
                : <div></div> //intentar corregir esto
            }
            
        </React.Fragment>
        
    )

}
export default ListProducts;