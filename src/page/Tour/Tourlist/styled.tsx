import styled from "styled-components"

export const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: 2px solid #fff;
  border-radius: 10px;
  width: 350px;
  cursor: pointer;
  overflow: hidden;
`
export const Cardimg=styled.img`
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 200px;
  
  &:hover{
    transform: scale(1.2);
    transition: 0.5s; 
  }
`
export const CardTitle=styled.h3`
  font-size: 24px;
  text-align: center;
  color:gray;
  padding: 30px 0 20px 0; 
`