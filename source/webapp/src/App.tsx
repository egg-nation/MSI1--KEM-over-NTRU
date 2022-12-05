import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import EncryptDecrypt from "./pages/encrypt-decrypt/EncryptDecrypt";
import EntriesVisualization from "./pages/entries-visualization/EntriesVisualization";
import Wiki from "./pages/wiki/Wiki";
import {Provider} from "jotai";

function App() {
    return (
        <Provider>
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
        </Provider>
    );
}

export default App;
