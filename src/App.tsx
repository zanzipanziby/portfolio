import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {MySkills} from "./components/MySkills/MySkills";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={"wrapperContent"}>

            <Home/>
            <MySkills/>
        </div>
    </div>
  );
}

export default App;
