import React from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import Router from './routes/Router';
import './index.scss';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

history.listen(location => {
    setTimeout(() => {
        //add thinbgs
    }, 100)
});

const App = () => {
    return (
        <ReactRouter history={history}>
            <div>
                <Router />
            </div>
        </ReactRouter>
    );
}


export default App;