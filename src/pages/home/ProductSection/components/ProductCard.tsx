import styled from "styled-components";
import { Link } from "react-router-dom";
import { FC } from "react";
import { Rating } from "@mui/material";

const CardContainer = styled(Link)`
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

interface ProductCardProps {
  productid: string;
  thumbnail: string;
  discount: number;
  price: number;
  name: string;
}

const ProductCard: FC<ProductCardProps> = ({
  productid,
  thumbnail,
  discount,
  price,
  name,
}) => {
  return (
    <CardContainer to={`/product/st?productid=${productid}`}>
      <Thumb src={thumbnail} />
      {discount != 0 && <DsicountSpan>{`${discount}% off`}</DsicountSpan>}
      <PriceDiv>
        <NewPriceSpan>{`৳${price - (price * discount) / 100}`}</NewPriceSpan>
        {discount != 0 && <OldPriceSpan>{`৳${price}`}</OldPriceSpan>}
      </PriceDiv>
      <Title> {`${name.substring(0, 22)}${name.length > 22 && "..."}`}</Title>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </CardContainer>
  );
};

export default ProductCard;
