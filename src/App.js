import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link, navigate } from "@reach/router";

import SearchContext from "./context/SearchContext";
import Menu from "./components/Menu";
import MyCart from "./pages/MyCart";
import ProjectInfo from "./pages/ProjectInfo";
import ProductsResults from "./pages/ProductsResults";
import Orders from "./pages/Orders";

import "./reset.scss";
import "./scss/Home.scss";

const App = () => {
  const searchHook = useState("");

  return (
    <SearchContext.Provider value={searchHook}>
      <div className="home">
        <Menu />
        <Router>
          <MyCart path="/carrinho" />
          <ProjectInfo path="/" />
          <ProductsResults path="produtos" />
          <Orders path="/pedidos" />
        </Router>
        <Link to="/pedidos">
          <button className="admin-button">admin</button>
        </Link>
      </div>
    </SearchContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
