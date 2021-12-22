import './App.css';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {NavBarContainer} from "./components/Navbar/NavBarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

function App(props) {
    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBarContainer/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </div>

        </div>


    );
}


export default App;
