import { useLocation } from "react-router-dom";
import ProductHeader from "./ProductHeader";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";

const ProductContainer = styled.div``

const Product = () => {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productid");
  return (
    <ProductContainer className="container">
      <ProductHeader productid={productId}/>
    </ProductContainer>
  );
};

export default Product;
