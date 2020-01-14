import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NewArticle from '../components/NewArticle.jsx'

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
        path="/edit/articles/:id"
        render={props => (<NewArticle {...props} />)}
        />
    </Switch>
    </BrowserRouter>
)

export default Routes;

