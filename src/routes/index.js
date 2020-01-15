import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from '../components/shared/Nav.jsx'
import Articles from '../components/Articles.jsx'
import NewArticle from '../components/NewArticle.jsx'
import EditArticle from '../components/EditArticle.jsx'

const Routes = ({ }) => (
    <BrowserRouter>
        <div className="mainContainer">
            <Nav />
            <Switch>
                <Route
                exact
                path="/"
                render={() => (<div>WUT NOW</div>)}
                />
                <Route
                exact
                path="/new/article/"
                render={props => (<NewArticle {...props} />)}
                />
                <Route
                exact
                path="/edit/articles/:id"
                render={props => (<EditArticle {...props} />)}
                />
                <Route
                exact
                path="/edit/articles/"
                render={props => (<Articles {...props} />)}
                />
            </Switch>
        </div>
    </BrowserRouter>
)

export default Routes;

