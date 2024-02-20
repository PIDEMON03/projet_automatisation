import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles/index.scss';

import Layout from "./pages/Layout";
import Accueil from "./pages/Accueil";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Accueil />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
