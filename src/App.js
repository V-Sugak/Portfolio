import React from "react";
import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {WorkingConditions} from "./workingConditions/WorkingConditions";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <WorkingConditions/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
