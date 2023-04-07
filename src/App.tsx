import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {MySkills} from "./components/MySkills/MySkills";
import {MyProjects} from "./components/MyProjects/MyProjects";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={"wrapperContent"}>

            <Home/>
            <MySkills/>
            <MyProjects/>
        </div>
    </div>
  );
}

export default App;
