import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './App';
import {ThemeProvider} from "./app/providers/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
