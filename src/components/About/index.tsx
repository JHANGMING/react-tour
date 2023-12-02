import { ImgaboutMe } from "../../util/Img";
import { Img, Title, Wrapper } from "../Home/styled";

const About=()=>{
  return(
    <Wrapper>
      <Title>這是關於我的頁面</Title>
      <Img src={ImgaboutMe} alt=""/>
    </Wrapper>
  )
}

export default About;