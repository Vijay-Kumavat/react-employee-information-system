import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MuiDemo from './Component/MUICheck';
import Header from './Component/Header';
import SignIn from './Component/SignIn';
import EmployeeForm from './Component/EmployeeForm';
import SignUp from './Component/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <SignUp/>
    <SignIn/>
    <EmployeeForm/>
    {/* <MuiDemo /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
