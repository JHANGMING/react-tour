import { useNavigate, useOutletContext } from "react-router-dom"
import { Imgkaohsiung,Imgkaohsiung2} from "../../../util/Img"
import { Title } from "../styled"
import { Card, Img,Carditem, Cardimg, CardTitle, Wrapper, ImgWrapper } from "./styled"
import { OutletContextType } from "./data"

export const Tourlist=()=>{
  const {isSelect,area,filterData}=useOutletContext<OutletContextType>()
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
            <Carditem key={Id} onClick={()=>cardhandler(Id)}>
              <Cardimg src={Picture1}/>
              <CardTitle>{Name}</CardTitle>
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