import { useEffect, useState } from "react";
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