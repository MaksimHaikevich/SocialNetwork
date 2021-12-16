import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import './App.css';
import {Dialogs} from "./components/Navbar/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


function App(props) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/dialogs'
                           element={<Dialogs stateLocal={props.state.messagesPage}
                                             dispatch={props.dispatch}/>}/>
                    <Route exact path='/profile' element={<Profile
                        stateLocal={props.state.profilePage}
                        dispatch={props.dispatch}/>}/>
                </Routes>
            </div>

        </div>


    );
}


export default App;
