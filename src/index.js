import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import App from './App';


import {Provider} from "react-redux";
import {Store} from "./Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Provider store={Store}>
            <App/>
        </Provider>
    </React.StrictMode>
);