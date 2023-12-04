import { useNavigate, useParams } from "react-router-dom";
import {  StyleInput } from "./styled";
import { ChangeEvent } from "react";
import { Session, SubTitle } from "../../page/Tour/styled";
import { DataItem } from "../../page/Tour/data";
interface SelectProps {
  setFilterData: (data:DataItem[])=>void
  setArea: (area: string) => void;
  tourData:DataItem[];
  setIsSelect:(isSelect: boolean) => void;
}
const Inputs=({setFilterData,setArea,tourData,setIsSelect}:SelectProps)=>{
  const {Id}=useParams<{ Id: string }>()
  const navigate=useNavigate();
  const inputHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    if(!value)return
    if (Id) {
      navigate(-1);
    }
    setFilterData(tourData.filter((item)=>item.Name.includes(value)))
    setArea("")
    setIsSelect(true)
  }
  return(
    <Session>
      <SubTitle>請輸入景點</SubTitle>
      <StyleInput placeholder="請輸入景點" onChange={inputHandler}/>
    </Session>
  )
}
export default Inputs;