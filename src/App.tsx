import styled from "styled-components"
import { Navbar } from "./components/Navbar"
import Hero from "./components/Hero"
import ProductSection from "./components/ProductSection"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const App = () => {
  return (
    <div>
      <Main>
        <Navbar />
        <Hero/>
        <ProductSection/>
      </Main>
    </div>
  )
}

export default App