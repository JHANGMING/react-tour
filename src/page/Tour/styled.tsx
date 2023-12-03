import styled from "styled-components";

export const Wrapper=styled.div`
  display: flex;
  gap:20px;
`;

export const Aside=styled.div`
  width: 25%;
`;

export const Main=styled.div`
  width: 75%;
`;

export const Session=styled.div`
  margin-bottom: 40px;
`;

export const Title=styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
`
export const SubTitle=styled.h3`
  font-size: 28px;
  margin-bottom: 20px;
`

export const Input = styled.input`
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


export const Img=styled.img`
  width:300px;
  height:400px;
  border-radius:10px;
  border: 2px solid #FFF;
  object-fit: cover;
`