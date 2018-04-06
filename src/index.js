import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './layout';
import registerServiceWorker from './registerServiceWorker';

console.log(process.env);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
