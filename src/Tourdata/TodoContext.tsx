import { ReactNode, createContext , useContext, useEffect, useReducer, useState} from "react";
import { TodoReducer, initState } from "./TodoReducer";

interface TourItem {
  Zipcode: string;
  Add: string;
  Name: string;
  Description: string;
  Picture1: string;
}
export interface Value {
  tour: TourItem[];
  saveData: (data:Value)=>TourItem[];
}
export const TourContext=createContext(initState)


interface Props {
  children: ReactNode;
}
export const TourProvider:React.FC<Props>=({children})=>{ 
  const [state,dispatch]=useReducer(TodoReducer,initState)
  

  const saveData=(data:Value)=>{
    console.log(data);
    
    dispatch({
      type:"SAVE_DATE",
      payload:data
    })
  }
  
	//建議拉出來比較好
  const value:Value={
    tour:state.tour,
    saveData
  }

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>
}

export const useTour=()=>{   
  const context=useContext(TourContext)
  if(context===undefined){
    console.log('Error')
  }
  return context
}

const api="https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c"

interface DataItem {
  id: number;
  name: string;
}
export const useGetData=()=>{
  const [data,setData]=useState<DataItem[]>([])
  const getApi=async()=>{
    const res=await fetch(`${api}`)
    const data = await res.json();
    // console.log(data.data.XML_Head.Infos.Info);
    setData(data.data.XML_Head.Infos.Info);
  }
  useEffect(()=>{
    getApi()
  },[])
  return data
}