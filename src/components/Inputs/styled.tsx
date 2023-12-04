import styled from "styled-components";


export const StyleInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 80%;

  &:focus {
    border-color: blue;
    outline: none;
  }

  &::placeholder {
    color: #888;
  }

`;
