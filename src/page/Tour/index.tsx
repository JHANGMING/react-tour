import { Outlet } from "react-router-dom"
import { Aside, Input, Main, Session, SubTitle, Wrapper } from "./styled"
import {  TourProvider } from "../../Tourdata/TodoContext"
import Select from "../../components/Select"
import { DataItem, useGetData } from "./data"
import { ChangeEvent, useEffect, useState } from "react"
import Loading from "../../components/Loading"


const Tour=()=>{
  const { data: tourData, isLoading } = useGetData();
  const [selectList,setSelectList]=useState<string[]>([])
  const [filterData,setFilterData]=useState<DataItem[]>([])
  const [area,setArea]=useState<string>("")
  const [isSelect,setIsSelect]=useState<boolean>(false)

  useEffect(()=>{
    
    if(tourData){
      const newdata=tourData.map((item)=>{
        const {Add}=item
        const regex = /([\u4e00-\u9fa5]+?)區/;
        const match = Add.match(regex);
        const area =match ? match[0] : '';
        return area
      })
      const sortd= newdata.filter(
      (item, index) => newdata.indexOf(item) === index
    );
      setSelectList(sortd); 
    }
  },[tourData])
  
  useEffect(()=>{
    if(area){
      console.log("change",area);
      setFilterData(tourData.filter((item)=>item.Add.includes(area)))
      setIsSelect(true)
    }
  },[area])

  const inputHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    if(!value)return
    setFilterData(tourData.filter((item)=>item.Name.includes(value)))
    setArea("")
  }
  
  return(
    <>
    { isLoading &&  <Loading/>}
    <Wrapper>
    <TourProvider>
      <Aside>
        <Session>
          <SubTitle>請選擇景點</SubTitle>
          <Select selectList={selectList} setArea={setArea}/>
        </Session>
        <Session>
          <SubTitle>請輸入景點</SubTitle>
          <Input placeholder="請輸入景點" onChange={inputHandler}/>
        </Session>
      </Aside>
      <Main>
        <Outlet context={{isSelect,area,filterData}}/>
      </Main>
    </TourProvider>
    </Wrapper>
    </>
  )
}

export default Tour