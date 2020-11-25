import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/cardapio" component={Menu} />
            <Route path="/cart" component={Cart} />
        </BrowserRouter>
    );
}

export default Routes;