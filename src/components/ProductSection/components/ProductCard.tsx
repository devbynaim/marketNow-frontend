import styled from "styled-components";
import {
  useGetProductQuery,
  useGetProductsQuery,
} from "../../../features/products/api";
import { useEffect } from "react";

const CardContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  height: 299px;
  max-width: 200px;
  font-size: 12px;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.03),
    0px 2px 4px 0px rgba(0, 0, 0, 0.03);
  &:hover {
    transition: all 0.3s;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.12),
      0px 2px 4px 0px rgba(0, 0, 0, 0.14);
  }
`;
const Thumb = styled.img`
  width: 100%;
`;
const DsicountSpan = styled.div`
  display: flex;
  height: 15px;
  width: 49px;
  padding: 5px;
  align-items: center;
  font-size: 14px;
  gap: 5px;
  color: #ffffff;
  background-color: #f3364c;
  border-radius: 2px;
  font-weight: bold;
`;
const PriceDiv = styled.div`
  display: flex;
  gap: 4px;
  font-weight: bold;
`;

const NewPriceSpan = styled.span`
  font-size: 17px;
  color: #000000;
`;
const OldPriceSpan = styled.span`
  text-decoration: line-through;
  font-size: 12px;
`;

const Title = styled.span`
  font-size: 14px;
  color: #000000;
`;

const ReviewContainer = styled.div`
font-size: 20px;
` 

const ProductCard = () => {
  const { isLoading, isSuccess, data } = useGetProductsQuery();

  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      {isLoading && <h1>Loading..</h1>}
      {data?.map((product) => {
        return (
          <CardContainer key={product.productid}>
            <Thumb src={product.thumbnail} />
            {product.discount != 0 && (
              <DsicountSpan>{`${product.discount}% off`}</DsicountSpan>
            )}
            <PriceDiv>
              <NewPriceSpan>
                {`৳${product.price - (product.price * product.discount) / 100}`}
              </NewPriceSpan>
              {product.discount != 0 && (
                <OldPriceSpan>{`৳${product.price}`}</OldPriceSpan>
              )}
            </PriceDiv>
            <Title>
              {" "}
              {`${product.name.substring(0, 22)}${
                product.name.length > 22 && "..."
              }`}
            </Title>
            <ReviewContainer>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
            <i className="ri-star-line"></i>
            </ReviewContainer>
          </CardContainer>
        );
      })}
    </>
  );
};

export default ProductCard;
