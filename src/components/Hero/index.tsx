import styled from "styled-components"
import Category from "../Category"
import Slider from "../Slider"

const HeroContainer = styled.div`
display: flex;
gap: 8px;
`
const Hero = () => {
  return (
    <HeroContainer className="container">
        <Category/>
        <Slider/>
    </HeroContainer>
  )
}

export default Hero