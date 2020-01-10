import React from "react";
import "../scss/CartItem.scss";

const CartItem = ({ img, name, quantity }) => {
  return (
    <div className="item-container">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="info">
        <p className="product-text product-name">{name}</p>
        <p className="product-text product-quantity">Quantidade: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
