import React from 'react';
import {Switch, Route} from "react-router-dom";

import {Header} from "./components";
import {Pizzas, Cart} from "./pages";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route path="/" exact>
                        <Pizzas path="/" />
                    </Route>
                    <Route path="/cart/" exact>
                        <Cart path="/cart/" />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
