import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
