import styled from "styled-components"

export const Wrapper=styled.div`
  display: flex;
  flex-direction: column;

`;

export const ImgWrapper=styled.div`
  display: flex;
  gap: 40px;
`;

export const Img=styled.img`
  width:300px;
  height:400px;
  border-radius:10px;
  border: 2px solid #FFF;
  object-fit: cover;
`
export const Title=styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
`
export const Card=styled.ul`
  display: flex; 
  flex-wrap: wrap;
  gap: 16px;
`
export const Carditem=styled.li`
  border: 2px solid #666666;
  border-radius: 10px;
  width: 400px;
  height: 150px;
  overflow: hidden;
  display: flex;
  &:hover{
    margin-top: -10px;
    transition: 0.5s;
    border: 2px solid #a10b0b;
  }
`
export const Cardimg=styled.img`
  object-fit: cover;
  width: 30%;
  &:hover{
    transform: scale(1.2);
    transition: 0.5s; 
  }
`
export const CardContainer=styled.div`
  display: flex;
  flex-direction :column ;
  justify-content: space-between;
  padding: 30px 10px 0 20px;
  width: 70%;
`
export const CardTitle=styled.h3`
  font-size: 24px;
  color:gray;
`
export const CardButton=styled.button`
  font-size: 16px;
  border-radius: 20px;
  color:gray;
  width: 100px;
  align-self: flex-end;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover{
    background-color: #000;
    color: #fff;
  }
`