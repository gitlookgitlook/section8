import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="products_wrapper" onClick={showDetail}>
      <img src={item?.img} alt={item?.title} />
      <div className="products_choice">{item?.choice == true ? "Conscious choice" : "\u00A0"}</div>
      <div className="product_title">{item?.title}</div>
      <div className="product_price">₩ {item?.price}</div>
      <div className="product_new">{item?.new == true ? "신제품" : "\u00A0"}</div>
    </div>
  );
};

export default ProductCard;
