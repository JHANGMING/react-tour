import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Container, Wrapper } from "./styled";

const Layout=()=>{
  return(
    <Wrapper>
      <Header/>
      <Container>
      <Outlet/>
      </Container>
      <Footer/>
    </Wrapper>
  )
}

export default Layout;