import { NavLink } from "react-router-dom"
import { Nav, NavLi, NavUl, Title } from "./styled"
import { style } from "./data"


const Header=()=>{
  
  
  return(
    <>
    <Nav>
      <Title>NavBar</Title>
      <NavUl>
        <NavLi><NavLink to="/" style={style}>首頁</NavLink></NavLi>
        <NavLi><NavLink to="/about" style={style}>About</NavLink></NavLi>
        <NavLi><NavLink to="/tour" style={style}>Tour</NavLink></NavLi>
      </NavUl>
    </Nav>
    </>
  )
  
  
}

export default Header