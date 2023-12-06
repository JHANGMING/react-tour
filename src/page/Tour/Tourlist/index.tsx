import { useNavigate} from "react-router-dom"
import { Imgkaohsiung,Imgkaohsiung2} from "../../../util/Img"
import { Title } from "../styled"
import { Card, Img,Carditem, Cardimg, CardTitle, Wrapper, ImgWrapper, CardButton, CardContainer } from "./styled"
import { useTour } from "../../../TourStore/TourReducer"

export const Tourlist=()=>{
  const {isSelect,filterData,area}=useTour()
  const navigate=useNavigate();
  const cardhandler=(id: number | string)=>{
    navigate(`/tour/${id}`)
  }
  return(
    <>
    {isSelect?
    <>
    <Title>{area}</Title>
      <Card>
        {filterData.map((item)=>{
          const {Id,Name,Picture1}=item
          return(
            <Carditem key={Id} >
              <Cardimg src={Picture1}/>
              <CardContainer>
                <CardTitle>{Name}</CardTitle>
                <CardButton type="button" onClick={()=>cardhandler(Id)}>詳情資訊</CardButton>
              </CardContainer>
            </Carditem>
          )
        })}
      </Card>
    </>
    :
    <Wrapper>
    <Title>歡迎來到高雄景點</Title>
    <ImgWrapper>
      <Img src={Imgkaohsiung}/>
      <Img src={Imgkaohsiung2}/>
    </ImgWrapper>
    </Wrapper>
    }
    
    </>
  )
}