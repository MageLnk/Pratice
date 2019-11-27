import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { GlobalContext } from '../globalContext/globalContext'

import NavBar from '../component/navbar/navBar';

import Home from '../views/home/home';
import OtherPage from '../views/otherpage/otherPage';
import Error from '../views/error404/error';

const App = props => {
    const [count, setCount] = useState(0)
    return (
        <BrowserRouter>
            <GlobalContext.Provider value={{ count, setCount }}>
                <div>
                    <div>
                        <NavBar />
                    </div>
                    <Switch>
                        <Route exact path='/otherpage' component={OtherPage} />
                        <Route exact path='/' component={Home} />
                        <Route render={Error} />
                    </Switch>
                </div>
            </GlobalContext.Provider>
        </BrowserRouter>
    );
}

export default App;