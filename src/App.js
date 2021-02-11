import React from 'react';
import {Switch, Route, useLocation} from "react-router-dom";

import {page} from "./router";
import {Pizzas, Cart, NotFound} from "./pages";
import {Header} from "./components";
import SelectPizza from "./components/PizzasCard/SelectPizza";


function App() {
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch location={background || location}>
                    <Route path={page.pizzas} exact component={Pizzas} />
                    <Route path={page.cart} exact component={Cart} />
                    <Route path="*" component={NotFound} />
                </Switch>

                {background &&
                <Route path={`${page.pizza}:id`}>
                    <SelectPizza />
                </Route>}
            </div>
        </div>
    );
}

export default App;



// add to package.json
//  "homepage": "https://basovich.github.io/react-app-pizza/",