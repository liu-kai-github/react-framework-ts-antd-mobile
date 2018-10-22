import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
} from "react-router-dom";
// import App from 'src/views/App';
import ROOT_ROUTE from "src/routes";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <ROOT_ROUTE/>
    </Router>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
