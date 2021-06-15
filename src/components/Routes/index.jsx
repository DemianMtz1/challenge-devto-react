import React from 'react'
import App from '../../App'
import Home from '../Home/home'
import {
    Switch,
    Route,
} from "react-router-dom";


export const Routes = () => {
    return (
        <Switch>
            <Route path="/post-details/:id" exact>
                <div>
                    <p>hola desde post details</p>
                </div>
            </Route>
            <Route path="/write-post" exact>
                <div>
                    <p>hola desde write-post</p>
                </div>
            </Route>
            <Route path="/home" exact>
                <Home />
            </Route>
            <Route path="/" exact>
                <App />
            </Route>
        </Switch>
    )
}
