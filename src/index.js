import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import ROUTES from './routes';
import HOME from './home.js';
import PROJETS from './projets.js';
import ABOUT from './about.js';
import ZAAP from './zaap.js';
import CONTACT from './contact.js';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HOME />} />
        <Route path={ROUTES.PROJETS} element={<PROJETS />} />
        <Route path={ROUTES.CONTACT} element={<CONTACT />} />
        <Route path={ROUTES.ABOUT} element={<ABOUT />} />
        <Route path={ROUTES.ZAAP} element={<ZAAP />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
