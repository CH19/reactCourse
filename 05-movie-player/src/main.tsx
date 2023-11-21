import App from './components/app';
import {createRoot} from 'react-dom/client'
// importamos react 
import React from 'react';
import './style.css'
const app = document.getElementById('app');
const root = createRoot(app!);
root.render(<App />)