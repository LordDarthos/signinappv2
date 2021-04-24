import React, { useState} from 'react';
import Barnavigator from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ShowNotes from './components/ShowNotes'
import AddNote from './components/AddNote'
import ModifyNote from './components/EditNote'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { getNotes, editNote, saveNote, deleteNote, saveUser, loginUser } from './services/index'

const useStateUserSession = localStorageKey => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ''
    );
   
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
   
    return [value, setValue];
};

function App() {

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

    const [products, setNotes] = useState([]);

    const [userSession, setUserSession] = useStateUserSession(
        'usersessionid'
    );

    const [userLogedIn, setUserLogedIn] = useState(false)

    

    async function LoadNotes () {
        const response = await getNotes(userSession);
    
        console.log("LoadNotes",response)
  
        if(response.status === 200) {
            setNotes(response.data.notes)
        }else {
             
        }
  
    }

    

    const handleSubmitUser = async (data) => {  
        await saveUser(data)
    }
   
    const handleLoginUser = async (data) => {
        const user = await loginUser(data)
        
        if (user.status === 200) {
            setUserSession(user.data)
            setUserLogedIn(true)
            
        } else if (user.status === 204) {
            setUserLogedIn(false)
        }
        
    }
    
    
    const handleLogoutUser = async () => {
        await setUserSession('')
        await setUserLogedIn(false)
        handleClick()
    }


    const handleSubmitNote = async (data) => {
        await saveNote(data, userSession)
        LoadNotes()
    }

    const handleDeleteNote = async (data) => {
        await deleteNote(data)
        LoadNotes()
    }

    const handleEditNote = async (data, body) => {
        await editNote(data, body)
        LoadNotes()
    }

    const handleUser = async (data) => {

        console.log("handle user",data)
    }

    const handleValue = async (data) => {
        setUserSession(data)
    }

  

  return (
    <Router>
      <Barnavigator userSession={userSession} handleLogoutUser={handleLogoutUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/signin" render={ () => <SignIn handleSubmit={handleLoginUser} handleUser={handleUser} handleValue={handleValue} /> } />
        <Route path="/users/signup" render={ () => <SignUp handleSubmit={handleSubmitUser} /> } />
        <Route path="/users/signout" />
        <Route path="/notes/new-note" children={ () => userSession ? <AddNote handleSubmit={handleSubmitNote} /> : ""} />
        <Route path="/notes/edit-note" render={ () =>  <ModifyNote /> } />
        {/* <Route path={`/notes`} render={ () => <ShowNotes products={products} handleDeleteNote={handleDeleteNote}  handleEditNote={handleEditNote} userSession={userSession} loadNotes={LoadNotes} /> } /> */}
        <Route path={`/notes`} children={ () => userSession ? <ShowNotes products={products} handleDeleteNote={handleDeleteNote}  handleEditNote={handleEditNote} userSession={userSession} loadNotes={LoadNotes} /> : ""} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
