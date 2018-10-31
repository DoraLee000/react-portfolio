import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import registerServiceWorker from './components/registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
