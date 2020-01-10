import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import SearchContext from "../context/SearchContext";
import axios from "axios";
import "../scss/ProductsResults.scss";

const ProductsResults = props => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search] = useContext(SearchContext);

  useEffect(() => {
    setProducts([]);
    setLoading(false);

    axios
      .post("https://api-ziro-moda.herokuapp.com/produtos/marca", {
        brand: search
      })
      .then(res => {
        const products = res.data.data;
        setProducts(products);
        setLoading(false);
        console.log(products);
      });
  }, [loading, setProducts, search]);

  return (
    <div className="search">
      <h1 className="page-title">Produtos:</h1>
      <div className="results">
        {loading && <h1 className="no-results-text">carregando...</h1>}
        {products.length !== 0
          ? products.map(c => (
              <ProductCard
                img={c.imageUrl}
                name={c.name}
                key={c._id}
                id={c._id}
              />
            ))
          : !loading && (
              <h1 className="no-results-text">
                Nenhum produto encontrado para:{" "}
                <span>{search ? search : "---"}</span>
              </h1>
            )}
      </div>
    </div>
  );
};

export default ProductsResults;
