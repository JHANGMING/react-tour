import styled from "styled-components";

export const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title=styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`
export const Img=styled.img`
  object-fit: cover;
  border-radius: 10px;
  width: 500px;
  height: 350px;
  border: 2px solid #fff;
  margin-bottom: 30px;
`
export const Desc=styled.p`
  font-size: 20px;
  padding: 20px;
`
export const StyleButton=styled.button`
  border:2px solid #000;
  background-color: #fff;
  font-size: 20px;
  padding: 12px 20px;
  border-radius: 10px;
  &:hover{
    background-color: #000;
    color: #fff;
  }
`