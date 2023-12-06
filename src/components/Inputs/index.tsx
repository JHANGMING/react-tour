import { useNavigate, useParams } from "react-router-dom";
import {  StyleInput } from "./styled";
import { ChangeEvent } from "react";
import { Session, SubTitle } from "../../page/Tour/styled";
import { useTour } from "../../TourStore/TourReducer";

const Inputs=()=>{
  const {Id}=useParams<{ Id: string }>()
  const navigate=useNavigate();
  const {inputArea,inputValue,setInputValue}=useTour()
  const inputHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    if (Id) {
      navigate(-1);
    }
    setInputValue(value)
    value && inputArea(value);
  }
  return(
    <Session>
      <SubTitle>請輸入景點</SubTitle>
      <StyleInput type="text" placeholder="請輸入景點" onChange={inputHandler} value={inputValue}/>
    </Session>
  )
}
export default Inputs;