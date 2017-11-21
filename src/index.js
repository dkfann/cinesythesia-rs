import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom'; 

import SearchStore from './stores/SearchStore';

const stores = { SearchStore };

const Root = (
    <Provider {...stores}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
