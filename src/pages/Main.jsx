import '../css/App.css';
import Navbar from "../components/NavBar";
import Projects from "./Projects";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import {Routes, Route} from "react-router-dom";


function Main() {
    return (
            <div className="main">
                <Navbar/>
                <div id={"main-page"}>
                    <Routes>
                        <Route path={"/"} element={<AboutMe/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/projects"} element={<Projects/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default Main;
