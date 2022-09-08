import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

declare global {
  interface Window {
    $BASE_URL: string;
  }
}

let url;

switch (process.env.NODE_ENV) {
  case "production":
    url = "http://todo.trinarybits.in";
    break;
  case "development":
    url = "http://todo.trinarybits.in";
    break;
  default:
    url = "http://todo.trinarybits.in";
}

window.$BASE_URL = url;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
