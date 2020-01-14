import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NewArticle from '../components/NewArticle.jsx'
import EditArticle from '../components/EditArticle.jsx'

const Routes = ({ }) => (
    <BrowserRouter>
    <Switch>
        <Route
        exact
        path="/"
        render={() => (<div>WUT NOW</div>)}
        />
        <Route
        exact
        path="/edit/articles/"
        render={props => (<NewArticle {...props} />)}
        />
        <Route
        exact
        path="/edit/articles/:id"
        render={props => (<EditArticle {...props} />)}
        />
    </Switch>
    </BrowserRouter>
)

export default Routes;

