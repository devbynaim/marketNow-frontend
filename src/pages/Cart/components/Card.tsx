import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "styled-components";
import { useRemoveFromCartMutation, useUpdateQuantityMutation } from "../../../features/cart/api";

const CartContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  gap: 16px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
`;

const ProductImage = styled.img`
  height: 150px;
  max-width: 200px;
`;

const SelectionStatus = styled.div<{ $selected: boolean }>`
  width: 20px;
  height: 15px;
  background-color: ${(props) => (props.$selected ? "blue" : "none")};
  border-radius: 100%;
  border: 1px solid blue;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
const DeleteBtn = styled(DeleteIcon)`
  font-size: 28px !important;
  padding: 0 !important;
  color: #616161;;
  &:hover{
    cursor: pointer;
    color: #E43003;
  }
`;

const Card = ({ discount, name, quantity, price, id }) => {
  const [updateQuantiry] = useUpdateQuantityMutation();
  const [deleteCart] = useRemoveFromCartMutation()
  const handleUpdateQuantity = (isPlus = true) => {
    if (isPlus) {
      updateQuantiry({ quantity: quantity+1, id });
      return
    }
    updateQuantiry({ quantity: quantity-1, id });
  };

  const handleDeleteCart = ()=>{
    deleteCart({id})
  }

  return (
    <CartContainer>
      <SelectionStatus />
      <ProductImage src="http://localhost:1337/uploads/tsb2_942606e2a4.webp" />
      <ContentBox>
        <PriceDiv>
          <NewPriceSpan>{`৳$${Math.floor(
            price - (price * discount) / 100
          )}`}</NewPriceSpan>
          {discount != 0 && <OldPriceSpan>{`৳${price}`}</OldPriceSpan>}
        </PriceDiv>
        <h3>{name}</h3>
        <QuantityDiv>
          <div
            style={{
              width: "85%",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <SubtractQuantiry
              disabled={quantity <= 1}
              onClick={() => {
                handleUpdateQuantity(false);
              }}
            >
              -
            </SubtractQuantiry>
            <span style={{ color: "#000000" }}>{quantity}</span>
            <AddQuantiry
              onClick={() => {
                handleUpdateQuantity(true);
              }}
            >
              +
            </AddQuantiry>
            <DeleteBtn onClick={handleDeleteCart}/>
            
          </div>
        </QuantityDiv>
      </ContentBox>
    </CartContainer>
  );
};

export default Card;
