import React, { useEffect } from 'react';
import ListProducts from './ListProducts'

//INTENTAR HACER ESTO DESDE LA PAGINA DE APP.JS

const ShowNotes = ({products, handleDeleteNote, handleEditNote, userSession, loadNotes}) => {
    
    
    useEffect(() => { //mover este hook a shownotes crear logout
        loadNotes()
        
    }, [])

    return (
        <ListProducts products={products} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} userSession={userSession} />
    )
}

export default ShowNotes