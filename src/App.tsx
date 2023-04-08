import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {MySkills} from "./components/MySkills/MySkills";
import {MyProjects} from "./components/MyProjects/MyProjects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <MySkills/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
