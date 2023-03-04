import Singin from "../../Pages/Singin/singin"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Notfound from "../../Pages/NotFound/Notfound";
import Homepage from "../../Pages/Homepage/Homepage";
import React from "react";
import { Navigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/singin" element={<Singin />}></Route>
                <Route path="/home" element={<Homepage />}></Route>
                <Route path="*" element={<Notfound />}></Route>
                <Route></Route>
            </Routes> 
        </BrowserRouter>
    );
}

export default App;
