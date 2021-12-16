import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import './App.css';
import {Dialogs} from "./components/Navbar/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";


function App(props) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/dialogs'
                           element={<DialogsContainer store={props.store}/>}/>
                    <Route exact path='/profile' element={<Profile store={props.store}/>}/>
                </Routes>
            </div>

        </div>


    );
}


export default App;
