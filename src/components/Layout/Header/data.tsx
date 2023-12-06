import { StyleProps } from "./styled";

export const style=({ isActive }: StyleProps) :React.CSSProperties=> ({
  color: isActive ? 'red' : 'black', 
  textDecoration: isActive ? 'underline' : 'none',
  textUnderlineOffset: isActive ? '5px' : '0',
  fontSize:"20px",
})