import styled from "styled-components";

const CategoryUl = styled.ul`
background-color: #F5F5F5;
width: 200px;
padding: 16px;
display: flex;
gap: 16px;
flex-direction: column;
box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
border-radius: 8px;
`;

const CategoryItem = styled.a`
color: #424242;
display: flex;
gap: 8px;
font-size: 18px;
&:hover{
    color: blue;
}
`

const Category = () => {
    return (
        <CategoryUl>
            <li>
                <CategoryItem href="#">
                <i className="ri-shirt-line"></i>
                <span>Shirt</span>
                </CategoryItem>
            </li>

            <li>
                <CategoryItem href="#">
                <i className="ri-umbrella-line"></i>
                <span>Umbrella</span>
                </CategoryItem>
            </li>
            <li>
                <CategoryItem href="#">
                <i className="ri-t-shirt-line"></i>
                <span>T-shirt</span>
                </CategoryItem>
            </li>
            <li>
                <CategoryItem href="#">
                <i className="ri-fridge-line"></i>
                <span>Fridge</span>
                </CategoryItem>
            </li>
            <li>
                <CategoryItem href="#">
                <i className="ri-glasses-2-line"></i>
                <span>Glasses</span>
                </CategoryItem>
            </li>
            <li>
                <CategoryItem href="#">
                <i className="ri-sofa-line"></i>
                <span>Sofa</span>
                </CategoryItem>
            </li>
            <li>
                <CategoryItem href="#">
                <i className="ri-smartphone-line"></i>
                <span>Smartphone</span>
                </CategoryItem>
            </li>
            <li>
                <CategoryItem href="#">
                <i className="ri-tv-line"></i>
                <span>Tv</span>
                </CategoryItem>
            </li>
        </CategoryUl>
    );
};

export default Category;
