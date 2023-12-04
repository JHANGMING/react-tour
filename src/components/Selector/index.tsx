import { useNavigate, useParams } from "react-router-dom";
import { StyledSelect } from "./styled";
import { ChangeEvent, useState } from "react";
import { Session, SubTitle } from "../../page/Tour/styled";
interface SelectProps {
  selectList: string[];
  setArea: (area: string) => void;
}

const Selector=({selectList,setArea}:SelectProps)=>{
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
    <Session>
      <SubTitle>請選擇景點</SubTitle>
        {/* <Select selectList={selectList} setArea={setArea}/> */}

      <StyledSelect value={selectValue} onChange={selecthandler} >
        <option value="" disabled>請選擇景點</option>
        {selectList?.map((item:string) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </StyledSelect>
    </Session>
  )
}
export default Selector;