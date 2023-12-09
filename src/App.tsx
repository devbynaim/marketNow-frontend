import styled from "styled-components"
import { Navbar } from "./components/Navbar"
import Hero from "./components/Hero"

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
      </Main>
    </div>
  )
}

export default App