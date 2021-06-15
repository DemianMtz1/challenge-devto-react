import React from 'react'
import App from '../../App'
import {
    Switch,
    Route,
} from "react-router-dom";
import { WritePostScreen } from '../../screens/WritePostScreen';
import { PostDetailsScreen } from '../../screens/PostDetailsScreen';


export const Routes = () => {
    return (
        <Switch>
            <Route path="/post-details/:id" exact>
                <PostDetailsScreen />
            </Route>
            <Route path="/write-post" exact>
                <WritePostScreen />
            </Route>
            <Route path="/" exact>
                <App />
            </Route>
        </Switch>
    )
}
