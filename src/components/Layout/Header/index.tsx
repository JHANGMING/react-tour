import { NavLink } from "react-router-dom"
import { Container, Nav, NavLi, NavUl, Title } from "./styled"
import { style } from "./data"


const Header=()=>{
  
  return(
    <>
    <Nav>
      <Container>
        <Title>NavBar</Title>
        <NavUl>
          <NavLi><NavLink to="/" style={style}>Home</NavLink></NavLi>
          <NavLi><NavLink to="/about" style={style}>About</NavLink></NavLi>
          <NavLi><NavLink to="/tour" style={style}>Tour</NavLink></NavLi>
        </NavUl>
      </Container>
    </Nav>
    </>
  )
  
  
}

export default Header