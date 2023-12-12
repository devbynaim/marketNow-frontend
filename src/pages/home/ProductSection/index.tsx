import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import { useGetProductsQuery } from "../../../features/products/api";

const ProductSectionContainer = styled.div`
  background-color: #fafafa;
  padding: 16px;
  display: grid;
  gap: 16px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const ProductDisplayContainer = styled.div`
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
`;

const ProductSection = () => {
  const { isLoading, data } = useGetProductsQuery(1);
  return (
    <ProductSectionContainer className="container">
      <h4>Recommended To You</h4>
      <ProductDisplayContainer>
        {isLoading && "loading....."}
        {data?.map(({ productid, thumbnail, discount, price, name }) => (
          <ProductCard
            productid={productid}
            thumbnail={thumbnail}
            discount={discount}
            price={price}
            name={name}
            key={productid}
          />
        ))}
      </ProductDisplayContainer>
    </ProductSectionContainer>
  );
};

export default ProductSection;
