import React, { useEffect, useState } from "react";
import MakeupCard from "components/Makeup/produtos";
import axios from "axios";

const PagesSearchMakeup = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick"
      )
      .then((response) => {
        setProdutos(response.data);
      });
  }, []);

  return (
    <div className="pages-produtos-seach_produto-card">
      {produtos.map((makeup) => (
        <MakeupCard makeup={makeup} />
      ))}
    </div>
  );
};

export default PagesSearchMakeup;
