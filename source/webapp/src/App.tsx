import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EncryptDecrypt from "./pages/EncryptDecrypt";
import EntriesVisualization from "./pages/EntriesVisualization";
import Wiki from "./pages/Wiki";

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Dashboard/>}/>
                <Route path="encrypt-decrypt" element={<EncryptDecrypt/>}/>
                <Route path="entries-visualization" element={<EntriesVisualization/>}/>
                <Route path="wiki" element={<Wiki/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </Router>
    );
}

export default App;
