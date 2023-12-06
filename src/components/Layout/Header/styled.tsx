import styled from "styled-components";


export interface StyleProps {
  isActive: boolean;
}
export const Container=styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;
export const Nav=styled.nav`
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
  font-weight: bold;
`;

