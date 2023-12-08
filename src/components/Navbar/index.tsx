import { styled } from "styled-components";
import "remixicon/fonts/remixicon.css";

const NavbarMain = styled.div`
  background-color: #ffffff;
  padding: 10px 0;
`;
const NavbarContainer = styled.div`
  display: grid;
  grid-template-areas:
    'menuLeft menuLeft menuRight menuRight'
    'menuSearch  menuSearch menuSearch menuSearch';

  gap: 16px;
  align-items: center;
  height: 100%px;
  padding: 0 16px;
  @media screen and (min-width:784px){
    grid-template-areas:
    'menuLeft menuSearch menuRight';
  }
`;
const Logo = styled.a`
  color: #e43003;
  font-size: 24px;
  font-weight: bolder;
`;

const LeftSide = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  gap: 8px;
  grid-area: menuLeft;
`;

const SideMenuActionDiv = styled.div`
  font-size: 24px;
  @media screen and (min-width:784px){
    display: none;
    
  }
`

const SideMenu = styled.div``


const SearchBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 5px;
  border: 1px solid rgba(97, 97, 97, 0.25);
  position: relative;
  grid-area: menuSearch;
`;

const SearchBar = styled.input`
  min-width: 220px;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 14px;
  padding: 0 16px;
  color: black;
  &::placeholder {
    color: #616161;
  }
`;

const SearchBtn = styled.button`
  font-size: 16px;
  height: 40px;
  padding: 0 19px;
  border: none;
  outline: none;
  background-color: #e43003;
  border-radius: 0px 5px 5px 0px;
  color: white;
`;

const SearchRecommendationDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  top: 52px;
  font-size: 14px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  position: absolute;
  border-radius: 5px;
 
`

const RecommendateItem = styled.a`
   color: black;
   padding: 10px;
   &:hover{
     background-color: #FAFAFA;

   }

`

const RightSide = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
  font-size: 32px;
  width: 100%;
  grid-area: menuRight;
`;
const Cart = styled.div`
  background-color: white;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
`;
const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #e43003;
  color: white;
  position: absolute;
  right: -3px;
  top: -3px;
  padding: 1px;
`;

const Profile = styled.div`
  cursor: pointer;
`;

export const Navbar = () => {
  return (
    <NavbarMain>
      <NavbarContainer className="container">
        <LeftSide>
          <SideMenuActionDiv>
          <i className="ri-menu-fill"></i>
          </SideMenuActionDiv>
          <Logo>MarketNow</Logo>
        </LeftSide>
        <SearchBox>
          <SearchBar type="search" placeholder="Search" />
          <SearchBtn>Search</SearchBtn>
          <SearchRecommendationDiv>
            <RecommendateItem href="#">Searh item 1</RecommendateItem>
            <RecommendateItem href="#">Searh item 2</RecommendateItem>
            <RecommendateItem href="#">Searh item 3</RecommendateItem>
            <RecommendateItem href="#">Searh item 4</RecommendateItem>
          </SearchRecommendationDiv>
        </SearchBox>
        <RightSide>
          <Cart>
            <CartCount>5</CartCount>
            <i className="ri-shopping-cart-2-line"></i>
          </Cart>
          <Profile>
            <i className="ri-account-circle-line"></i>
          </Profile>
        </RightSide>
      </NavbarContainer>
    </NavbarMain>
  );
};
