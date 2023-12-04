import { Imglandingpage } from "../../util/Img";
import { Img, Title, Wrapper } from "./styled";

const Home=()=>{
  return(
    <Wrapper>
      <Title>歡迎來到高雄旅遊網首頁</Title>
      <Img src={Imglandingpage} alt=""/>
    </Wrapper>
  )
}

export default Home;