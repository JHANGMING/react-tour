import styled from "styled-components";

export const Wrapper=styled.div`
  display: flex;
  justify-content: space-between;
  gap:40px;
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


export const Img=styled.img`
  width:300px;
  height:400px;
  border-radius:10px;
  border: 2px solid #FFF;
  object-fit: cover;
`