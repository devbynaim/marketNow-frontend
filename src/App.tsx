import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default App;
