import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root') as HTMLElement;
ReactDOM.render(<App />, rootEl);

if (module.hot) {
	module.hot.accept()
}