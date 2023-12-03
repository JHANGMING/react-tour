import { useNavigate, useParams } from "react-router-dom";
import { StyledSelect } from "./styled";
import { ChangeEvent, useState } from "react";
interface SelectProps {
  selectList: string[];
  setArea: (area: string) => void;
}

const Select=({selectList,setArea}:SelectProps)=>{
  const {Id}=useParams()
  const navigate=useNavigate();
  const [selectValue, setSelectValue] = useState<string>("");
  const selecthandler=(e:ChangeEvent<HTMLSelectElement>)=>{
    const value = e.target.value;
    if (Id) {
      navigate(-1);
    }
    setArea(value);
    setSelectValue(value)
  }
  return(
    <StyledSelect value={selectValue} onChange={selecthandler} >
      <option value="" disabled>請選擇景點</option>
      {selectList?.map((item:string) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </StyledSelect>
  )
}
export default Select;