import styled from "styled-components";
import { NavLink as RouterNavLink } from 'react-router-dom';

export interface StyleProps {
  isActive: boolean;
}

export const Nav=styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #999999;
  padding: 20px 40px;
`;

export const Title=styled.h1`
  font-size: 28px;
  font-weight: bold;
`

export const NavUl=styled.ul`
  display: flex;
  gap:20px;
`;

export const NavLi=styled.li`
  
  
  
`;

export const StyledNavLink = styled(RouterNavLink)<StyleProps>`
  font-size: 20px;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? 'blue' : 'black')};
`;