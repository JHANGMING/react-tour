import { useNavigate,useParams } from "react-router-dom";
import { Desc, Img, StyleButton, Title, Wrapper } from "./styled";
import { useTour } from "../../../TourStore/TourReducer";


const TourDetail=()=>{
  const {Id}=useParams<{ Id: string }>()

  const navigate=useNavigate();
  const {filterData}=useTour()
  const filter=filterData?.find((item)=>item.Id===Id)

  return(
    <Wrapper>
      <Title>{filter?.Name}</Title>
      <Img src={filter?.Picture1}/>
      <Desc>{filter?.Description}</Desc>
      <Desc>地址：{filter?.Add}</Desc>
      <Desc>開放時間：{filter?.Opentime}</Desc>
      <StyleButton type="button" onClick={()=>{navigate(-1)}}>回上一頁</StyleButton>
    </Wrapper>
  )
}

export default TourDetail;