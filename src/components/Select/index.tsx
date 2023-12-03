import { useNavigate, useParams } from "react-router-dom";
import { StyledSelect } from "./styled";


const Select=({selectList,setArea})=>{
  const {Id}=useParams()
  const navigate=useNavigate();
  
  const selecthandler=(e)=>{
    if(Id){
      navigate(-1)
      setArea(e.target.value);
    }
    setArea(e.target.value);
    
  }
  return(
    <StyledSelect onChange={selecthandler}>
      <option value="">請選擇景點</option>
      {selectList?.map((item, index) => (
        <option key={index} value={item.value}>
          {item}
        </option>
      ))}
    </StyledSelect>
  )
}
export default Select;