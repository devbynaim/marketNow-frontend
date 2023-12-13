import { useLocation } from "react-router-dom";
import ProductHeader from "./ProductHeader";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import ProductBody from "./ProductBody";
import { useGetProductQuery } from "../../features/products/api";
import { useEffect } from "react";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;



const Product = () => {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productid");
  const {data} = useGetProductQuery(productId);
  return (
    <ProductContainer className="container">
      {data&& <ProductHeader data={data} />}
      {data && <ProductBody data={data}/>}
    </ProductContainer>
  );
};

export default Product;
