import { NavLink, useNavigate, useOutletContext } from "react-router-dom"
import { Imgkaohsiung } from "../../../util/Img"
import { Title } from "../styled"
import { Card, Img,Carditem, Cardimg, CardTitle } from "./styled"

export const Tourlist=()=>{
  const {isSelect,area,filterData}=useOutletContext()
  
  console.log("list",filterData);
  const navigate=useNavigate();
  const cardhandler=(id)=>{
    console.log(id);
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
    <>
    <Title>歡迎來到高雄景點</Title>
    <Img src={Imgkaohsiung}/>
    </>
    }
    
    </>
  )
}