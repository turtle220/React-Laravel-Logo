import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import TaskEdit from './TaskEdit';
import Main from './Main';
import EnterLogoName from './EnterLogoName';
import EnterBusinessName from './EnterBusinessName';
import EnterSlogan from './EnterSlogan';
import mainReducer from '../reducer';

const store = createStore(mainReducer)

if (document.getElementById('react-main')) {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        {/* <Route exact path="/:id/edit" component={TaskEdit} /> */}
                        {/* <Route path="" component={}></Route> */}
                        {/* <App /> */}
                        <Route exact path="/" component={Main} />
                        <Route path="/wizard/enterLogoName" component={EnterLogoName} />
                        <Route path="/wizard/enterBusinessName" component={EnterBusinessName} />
                        <Route path="/wizard/enterSlogan" component={EnterSlogan} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('react-main')
    );
}