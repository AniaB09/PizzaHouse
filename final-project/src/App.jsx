import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Contact from "./components/contact/Contact.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
