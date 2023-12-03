import styled from "styled-components"



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
`
export const Cardimg=styled.img`
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 200px;
`
export const CardTitle=styled.h3`
  font-size: 24px;
  text-align: center;
  color:gray;
  padding: 10px 0px;
`