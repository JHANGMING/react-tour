import styled from "styled-components";

export const Wrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position:fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.5);
  z-index: 20;
  backdrop-filter:blur(3px) ;
`;

{/* <div className=" fixed top-0 left-0 right-0 bottom-0 bg-black/[.5] z-20 flex justify-center items-center" style={{backdropFilter:"blur(3px)"}}></div> */}