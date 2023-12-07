import { useNavigate } from "react-router-dom";
import { Img, Title, Wrapper } from "./styled";
import { useEffect } from "react";
import { ImgnotFind } from "../../util/Img";

const Notfind=()=>{
  const navigate=useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },1500)
  },[])
  return(
    <Wrapper>
      <Title>老師說不能色色喔！！！</Title>
      <Img src={ImgnotFind}/>
    </Wrapper>
  )
}
export default Notfind;