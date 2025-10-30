import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("dtail data?", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} lg={6} className="product-img">
          <img src={product?.img} width={400} alt={product?.title} />
        </Col>
        <Col xs={12} lg={6}>
          <div className="product-info">
            <div className="product-title">{product?.title}</div>
            <div className="product-price">₩{product?.price?.toLocaleString()}</div>
            <div className="conscious-choice">{product?.choice === true ? "🌱 Conscious choice" : "\u00A0"}</div>
            <div className="size-dropdown">
              <DropdownButton id="dropdown-basic-button" title="사이즈 선택" variant="outline-secondary">
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </DropdownButton>
            </div>
            <Button variant="outline-dark" className="add-button">
              장바구니에 추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
