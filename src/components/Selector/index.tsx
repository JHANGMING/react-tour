import { useNavigate, useParams } from "react-router-dom";
import { StyledSelect } from "./styled";
import { ChangeEvent } from "react";
import { Session, SubTitle } from "../../page/Tour/styled";
import { useTour } from "../../TourStore/TourReducer";


const Selector=()=>{
  const {Id}=useParams()
  const navigate=useNavigate();
  const {seletlist,selectArea,selectValue,setSelectValue}=useTour()
  const selecthandler=(e:ChangeEvent<HTMLSelectElement>)=>{
    const value = e.target.value;
    if (Id) {
      navigate(-1);
    }
    selectArea(value)
    setSelectValue(value)
  }
  
  
  return(
    <Session>
      <SubTitle>請選擇景點</SubTitle>
      <StyledSelect value={selectValue} onChange={selecthandler} >
        <option value="" disabled>請選擇景點</option>
        {seletlist?.map((item:string) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </StyledSelect>
    </Session>
  )
}
export default Selector;