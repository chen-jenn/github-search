import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';
import './css/navbar.css'; 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
