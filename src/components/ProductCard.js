import React from "react";
import "../scss/ProductCard.scss";

const ProductCard = ({ img, name, id }) => {
  function addToCart(itens) {
    const older = localStorage.getItem("carrinho");

    if (older) {
      var arr = [JSON.parse(older)];
      return localStorage.setItem(
        "carrinho",
        JSON.stringify(arr.concat(itens).flat())
      );
    }
    return localStorage.setItem("carrinho", JSON.stringify(itens));
  }

  return (
    <div className="product-container">
      <div className="product-image" style={{ backgroundImage: `url(${img})` }}>
        <p className="product-name">{name}</p>
      </div>
      <button
        className="add-product-button"
        onClick={e => addToCart({ name, imageUrl: img, id })}
      >
        +
      </button>
    </div>
  );
};

export default ProductCard;
