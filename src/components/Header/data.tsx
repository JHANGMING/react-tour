import { StyleProps } from "./styled";

export const style=({ isActive }: StyleProps) => ({
      color: isActive ? 'red' : 'black', 
      textDecoration: isActive || 'none',
      fontSize:"20px"
    })