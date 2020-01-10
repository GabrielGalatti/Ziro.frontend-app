import React, { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";

import "../scss/Orders.scss";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAllOrders([]);

    axios.get("https://api-ziro-moda.herokuapp.com/pedidos").then(res => {
      setAllOrders(res.data.data);
      setLoading(false);
    });
  }, [setAllOrders, setLoading]);

  console.log(allOrders);
  return (
    <div className="orders-container">
      <h1 className="page-title">Pedidos:</h1>
      <div className="orders">
        {loading && <h1>carregando...</h1>}
        {allOrders.length !== 0 ? (
          allOrders.map(order => (
            <OrderCard
              name={order._id}
              products={order.products}
              key={order._id}
            />
          ))
        ) : (
          <h1>Nenhum pedido encontrado :(</h1>
        )}
      </div>
    </div>
  );
};

export default Orders;
