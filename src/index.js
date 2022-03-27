import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import{BrowserRouter} from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import Form from './Form';
import GoogleApiWrapper from './geolocation';
import Home from './Home'
import App from './App'



ReactDOM.render(
  <>
    <BrowserRouter>
<App />
  </BrowserRouter></>,
  document.getElementById('root')
);

