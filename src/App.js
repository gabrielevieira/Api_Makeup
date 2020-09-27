import React from "react";
import PromotionCard from "components/Promotion/Card/Card";

const App = () => {
  const promotion = {
    id: 1,
    title: "Tenis Adidas - Modelo Basic",
    price: 2332,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/451f8a2412774782a203aa630115a796_9366/Tenis_Kaptir_Preto_EE9513_01_standard.jpg",
    url:
      "https://www.adidas.com.br/tenis-kaptir/EE9513.html?cm_mmc=AdieSEM_Google_PLA-_-Always_On-_-Shopping-_-EE9513-0003-_-dv%3AeCom-_-cn%3AAlways_On-_-pc%3ARunning%2CCaminhada&cm_mmc1=BR&cm_mmc2=PLA-Multiple-Running%2CCaminhada-Other-None-BR-LATAM-eCom-Paid_Search&dfw_tracker=17326-EE9513-0003&gclid=Cj0KCQjwzbv7BRDIARIsAM-A6-2_VqT1JvCNXWy9tZDq4RyWrxKiwys3J3pudjuaDYb2MEUW5GTQHpUaAtgtEALw_wcB&gclsrc=aw.ds",
    comments: [
      {
        id: 1,
        comment: "Tenis Adidas",
      },
    ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <PromotionCard promotion={promotion} />
      </header>
    </div>
  );
};

export default App;
