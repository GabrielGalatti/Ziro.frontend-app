import React, { useState, useEffect } from "react";
import axios from "axios";

import "../scss/MyCart.scss";

import CartItem from "../components/CartItem";

const MyCart = () => {
  const [cartItens, setCartItens] = useState([]);
  const [allClothes, setAllClothes] = useState(getCartItens());

  function getCartItens() {
    const cartItens = localStorage.getItem("carrinho");
    if (cartItens == null) return [];
    return JSON.parse(cartItens);
  }

  function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  function getQuantity(id) {
    if (allClothes.length > 1)
      return allClothes.filter(c => c.id === id).length;
    return 1;
  }

  async function DoAnOrder(itens) {
    await axios
      .post("https://api-ziro-moda.herokuapp.com/pedidos", {
        products: [...itens]
      })
      .then(e => {
        localStorage.clear();
        setCartItens([]);
        setAllClothes([]);
      });
  }

  useEffect(() => {
    setCartItens([]);
    const uniqueClothes =
      allClothes.length > 1 ? removeDuplicates(allClothes, "id") : [allClothes];
    setCartItens(uniqueClothes.flat());
    setAllClothes([allClothes].flat());
  }, [setCartItens, setAllClothes]);

  return (
    <div className="cart">
      <div className="header-cart">
        <h1 className="page-title">Meu Carrinho:</h1>
        <button
          className="done-button"
          disabled={cartItens.length !== 0 ? false : true}
          onClick={e => DoAnOrder(allClothes.map(c => c.id))}
        >
          Fazer Pedido
        </button>
      </div>
      <div className="cart-items">
        {cartItens.length > 0 ? (
          cartItens.map(c => (
            <CartItem
              name={c.name}
              key={c.id}
              img={c.imageUrl}
              quantity={getQuantity(c.id)}
            />
          ))
        ) : (
          <div className="empty-cart">
            <h2>Seu Carrinho está vazio :(</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
