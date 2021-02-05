import React from 'react';
import {Route} from "react-router-dom";

import {Header} from "./components";
import {SelectPizza, Cart} from "./pages";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        const url = 'http://localhost:3000/db.json';
        axios.get(url)
            .then(respond => {
                if (respond.status === 200) {
                    dispatch(setPizzas(respond.data.pizzas))
                }
                else {
                    return 'List empty';
                }
            })
    }, [dispatch]);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" exact>
                    <SelectPizza />
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
            </div>
        </div>
    );
}

export default App;
