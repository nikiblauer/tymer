import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './index.css';
import App from './App';
import MainPage from "./MainPage";
import SettingsPage from "./SettingsPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  </BrowserRouter>, 
  document.getElementById('root')
);
