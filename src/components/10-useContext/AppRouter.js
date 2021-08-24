import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <NavBar/>
                <div className= "container">

                    <Switch>
                        <Route
                            exact
                            path = "/"
                            component = { HomeScreen }
                        >
                        </Route>
                        <Route
                            path = "/about"
                            component = { AboutScreen }
                        >
                        </Route>
                        <Route
                            path = "/login"
                            component = { LoginScreen }
                        >
                        </Route>
                        {/* <Route component = { HomeScreen}/> */}
                        <Redirect to ="/"/>
                    </Switch>
                </div>

            </>
        </Router>
    )
}
