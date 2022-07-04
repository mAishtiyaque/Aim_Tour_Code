import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import AlertComponent from './_components/AlertComponet'
import App from './App';
import { LogReg } from './LoginPage/LogReg';
import { BeachDetails } from './HomePage/Beach';
import { DashBoard} from './DashBoard/DashBoard';
import Header from './HomePage/Header'
import reportWebVitals from './reportWebVitals';
import { store } from './_helpers'
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AlertComponent />
            <Header />
            <Routes>
                <Route path="/" element={<App className={'app'} />} />
                <Route path="/login" element={<LogReg />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/beach/:id" element={<BeachDetails />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>

    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
