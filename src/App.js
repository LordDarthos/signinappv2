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
import useHistory, { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

    let history = useHistory();

    // async function LoadUser () {
    //     // const response = await getUserSession();
    //     // const user = await getUserSession();
    //     // console.log("USER",user)
    //     // console.log("LoadUser", response)
    //     if(user.status === 200 || user.status === 204) {
    //         setUserLogedIn(true)
    //     }
    //     // console.log(user)
    //     console.log(userLogedIn)
    //     // setIsLoading(false);
    // }

    const handleSubmitUser = async (data) => {  
        await saveUser(data)
        LoadNotes()
    }
    console.log(userSession)
    console.log(userLogedIn)
    const handleLoginUser = async (data) => {
        const user = await loginUser(data)
        console.log("RESPUESTA",user)
        if (user.status === 200) {
            await setUserSession(user.data)
            await setUserLogedIn(true)
            // console.log(UserSession)
            // setUserLogedIn(true)
            // if(kk.status === 200) sessionStorage.setItem('mydata',{loged:true})

  
            history.push("/about");
            

        } else if (user.status === 204) {
            setUserLogedIn(false)
        }
        // LoadNotes()
    }
    console.log(userLogedIn)
    
    const handleLogoutUser = async () => {
        setUserSession('')
        setUserLogedIn(false)
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

    // useEffect(() => { //mover este hook a shownotes crear logout
    //     LoadNotes()
    //     // LoadUser()
    // }, [])

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
