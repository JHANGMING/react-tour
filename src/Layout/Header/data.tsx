import { StyleProps } from "./styled";

export const style=({ isActive }: StyleProps) :React.CSSProperties=> ({
  color: isActive ? 'red' : 'black', 
  textDecoration: isActive ? 'underline' : 'none',
  fontSize:"20px"
})