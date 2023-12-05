import styled from "styled-components";

export const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  cursor: pointer;

  &:focus {
    border-color: blue;
    outline: none;
  }

`;