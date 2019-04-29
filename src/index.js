import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FruitApp from './components/fruits/FruitApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FruitApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
