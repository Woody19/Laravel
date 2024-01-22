import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import ArticlePage from './components/ArticlePage.jsx';
import { createRoot } from 'react-dom/client';
import CreateArticle from "./components/CreateArticle.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/articles/:id" element={<ArticlePage />} />
                <Route path="/articles/create" element={<CreateArticle />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById('app')) {
    const root = createRoot(document.getElementById('app'));
    root.render(<App />);
}
