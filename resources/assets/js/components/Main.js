import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
 
function Main(props) {
    const greeting = 'Hello Function Component!';
    const search = props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const id = params.get('id')

    return (
        <h4>
            <Link to={`/wizard/enterLogoName`}>Let's make a logo!</Link>
        </h4>
    )
}
 
export default Main;