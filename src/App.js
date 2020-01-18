import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from "./pages/home/home";
import CountersPage from "./pages/counters/countersPage";
import {Navbar} from "./components/navbar/navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/counters' exact render={() => <CountersPage/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

