import { FC } from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import styled from "styled-components";

// Content should come from your Strapi API

const ProductConatiner = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 5px;
`;
const ProductHeading = styled.span`
font-weight: 700;
padding: 16px;
color: black;
`;

const ProductDescription = styled.div`
background-color: #ffffff;
padding: 40px;
display: flex;
flex-direction: column;
gap: 8px;

`;

const ProductBody: FC<{ data: Product }> = ({ data }) => {
  const { description }: BlocksContent = data;
  return (
    <ProductConatiner>
      <ProductHeading>Product details of {data.name}</ProductHeading>
      <ProductDescription className="productDescription">
        <BlocksRenderer content={description} />
      </ProductDescription>
    </ProductConatiner>
  );
};

export default ProductBody;
