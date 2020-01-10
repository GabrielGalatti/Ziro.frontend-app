import React, { useState, useContext } from "react";
import { Link, navigate } from "@reach/router";
import SearchContext from "../context/SearchContext";

import logo from "../assets/images/logo.png";
import tshirtIcon from "../assets/images/tshirt-icon.svg";
import cartIcon from "../assets/images/shopping-cart-icon.svg";

const Menu = () => {
  const [search, setSearch] = useContext(SearchContext);

  function doSearch(e) {
    if (e.key === "Enter") {
      navigate("/produtos");
    }
  }
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Ziro Moda" className="logo" />
      </Link>
      <div className="search-input-container">
        <input
          id="search-input"
          placeholder="nike, adidas, reserva..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => doSearch(e)}
          autoComplete="off"
        ></input>
      </div>
      <div className="icon-menu">
        <Link to="/produtos">
          <img src={tshirtIcon} alt="Produtos" />
        </Link>
        <Link to="/carrinho">
          <img src={cartIcon} alt="Carrinho" />
        </Link>
      </div>
    </header>
  );
};

export default Menu;
