import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { FC, useState } from "react";
import { Button, Rating, ToggleButton, ToggleButtonGroup } from "@mui/material";

const ProductHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 16px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  @media screen and (min-width: 784px) {
    flex-direction: row;
  }
`;

const SliderContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
`;

const Slider = styled(ImageGallery)``;

const Detial = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  flex-direction: column;
`;

const Price = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  color: #e43003;
  letter-spacing: -2px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

const BrandDiv = styled.div`
  display: flex;
  gap: 8px;
  color: #616161;
  font-size: 14px;
`;

const SizeDiv = styled.div`
  display: flex;
  align-items: center;
  color: #616161;
`;

const ToggleBtn = styled(ToggleButton)`
  width: 60px;
`;

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  color: #616161;
`;
const AddQuantiry = styled(Button)`
  background-color: #f5f5f5 !important;
  font-size: 16px !important;
  padding: 0 !important;
`;
const SubtractQuantiry = styled(AddQuantiry)``;

const ActionDiv = styled.div`
  display: flex;
  gap: 8px;
`;

const BuyBtn = styled(Button)`
  width: 100%;
`;
const AddCartBtn = styled(Button)`
  background-color: #e43003 !important;
  width: 100%;
`;

const ProductHeader: FC<{ data: Product }> = ({ data }) => {
  const [quantity, setQuantity] = useState(0);
  const [alignment, setAlignment] = useState("M");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ProductHeaderContainer>
      <SliderContainer>
        {data && (
          <Slider
            className="slideImage"
            items={data?.images}
            autoPlay
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            thumbnailPosition="left"
          />
        )}
      </SliderContainer>
      <Detial>
        <Title>{data?.name}</Title>
        <Price>
          <span>{`৳ ${Math.floor(
            data.price - (data.price * data.discount) / 100
          )}`}</span>
          <span
            style={{
              fontSize: "14px",
              color: "#616161",
              textDecoration: "line-through",
            }}
          >
            {data.price}
          </span>
        </Price>
        <RatingContainer>
          <Rating readOnly defaultValue={2.5} precision={0.5} size="small" /> |
          185 Reviews
        </RatingContainer>
        {/* <Title>{data?.name}</Title> */}
        <BrandDiv>
          <span>brand</span>
          <span>{data.brand}</span>
        </BrandDiv>

        <SizeDiv>
          <span style={{ width: "15%" }}>Sizes</span>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="sizes"
            size="small"
          >
            <ToggleBtn value="M">M</ToggleBtn>
            <ToggleBtn value="L">L</ToggleBtn>
            <ToggleBtn value="XL">XL</ToggleBtn>
            <ToggleBtn value="XLL">XXL</ToggleBtn>
          </ToggleButtonGroup>
        </SizeDiv>

        <QuantityDiv>
          <span style={{ width: "15%" }}>Quantity</span>
          <div
            style={{
              width: "85%",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <SubtractQuantiry
              disabled={quantity == 0}
              onClick={() => setQuantity((p) => p - 1)}
            >
              -
            </SubtractQuantiry>
            <span style={{ color: "#000000" }}>{quantity}</span>
            <AddQuantiry onClick={() => setQuantity((p) => p + 1)}>
              +
            </AddQuantiry>
          </div>
        </QuantityDiv>

        <ActionDiv>
          <BuyBtn variant="contained">Buy Now</BuyBtn>
          <AddCartBtn variant="contained">Add to Cart</AddCartBtn>
        </ActionDiv>
      </Detial>
    </ProductHeaderContainer>
  );
};

export default ProductHeader;
