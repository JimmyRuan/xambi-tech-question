// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import FormWithEverything from './pages/FormWithEverything';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/form-with-everything" element={<FormWithEverything />} />
        </Routes>
    );
}

export default App;
