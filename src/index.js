import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navigation from './Components/Navigation';
import Footer from "./Components/Footer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <App />
    <Footer />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
