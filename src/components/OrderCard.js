import React, { useEffect, useState } from "react";
import "../scss/OrderCard.scss";
import axios from "axios";

const OrderCard = ({ name, products }) => {
  const [productsIds, setProductsIds] = useState(products);
  const [allproducts, setAllProducts] = useState([]);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    setProductsIds(products);
    async function getProductNames() {
      const unique = productsIds.filter(onlyUnique);
      var arr = [];
      for (let i = 0; i < unique.length; i++) {
        let id = unique[i];
        await axios
          .get(`https://api-ziro-moda.herokuapp.com/produtos/${id}`)
          .then(res => arr.push(res.data.data[0].name));
      }
      console.log(arr);
      setAllProducts(arr);
    }

    getProductNames();
  }, [setProductsIds]);

  return (
    <div className="order-container">
      <div className="product-image">
        {allproducts.map(p => (
          <p>-{p}</p>
        ))}
      </div>
      <div className="info">
        <p className="product-text product-name">{name}</p>
      </div>
    </div>
  );
};

export default OrderCard;
