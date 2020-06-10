import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TaskEdit from './components/TaskEdit';

if (document.getElementById('react-main')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/:id/edit" component={TaskEdit} />
                    {/* <Route path="" component={}></Route> */}
                    
                    <App />
                    
                </Switch>
            </div>
        </BrowserRouter>,

        document.getElementById('react-main')
    );
}

// if (document.getElementById('react-main')) {
//     ReactDOM.render(<Example />, document.getElementById('react-main'));
// }