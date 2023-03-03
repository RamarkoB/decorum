import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, Footer} from './App';
import reportWebVitals from './prebuilt/reportWebVitals';
import * as serviceWorkerRegistration from './prebuilt/serviceWorkerRegistration';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const app = ReactDOM.createRoot(document.getElementById('root')); 
const footer = ReactDOM.createRoot(document.getElementById('footer')); 

setInterval(function() {
  app.render(<App />)
  footer.render(<Footer />);
}, 50);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();