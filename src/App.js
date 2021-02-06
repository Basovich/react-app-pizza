import React from 'react';
import {Route} from "react-router-dom";

import {Header} from "./components";
import {SelectPizza, Cart} from "./pages";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/react-app-pizza/" exact>
                    <SelectPizza />
                </Route>
                <Route path="/react-app-pizza/cart" exact>
                    <Cart />
                </Route>
            </div>
        </div>
    );
}

export default App;
