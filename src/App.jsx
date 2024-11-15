// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import FormWithEverything from './pages/FormWithEverything';
import PillListPage from "./pages/PillListPage";
import ItemListPage from "./pages/ItemListPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/form-with-everything" element={<FormWithEverything />} />
            <Route path="/pill-list-page" element={<PillListPage />} />
            <Route path="/item-list" element={<ItemListPage />} />
        </Routes>
    );
}

export default App;
