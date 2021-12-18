import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {NavBarContainer} from "./components/Navbar/NavBarContainer";

function App(props) {
    debugger
    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/dialogs'
                           element={<DialogsContainer/>}/>
                    <Route exact path='/profile' element={<Profile/>}/>
                    <Route exact path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>

        </div>


    );
}


export default App;
