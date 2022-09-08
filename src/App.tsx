import React, { useState } from 'react'
import './App.scss'

import { Provider } from 'react-redux';
import store from './Redux/store'

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './Routes';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
          <div className="app-content">
            <ToastContainer />
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App
