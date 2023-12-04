import { Outlet} from "react-router-dom"
import { Aside, Main, Wrapper } from "./styled"
import Inputs from "../../components/Inputs"
import { DataItem, useGetData } from "./data"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading"
import Selector from "../../components/Selector"


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
      setFilterData(tourData.filter((item)=>item.Add.includes(area)))
      setIsSelect(true)
    }
  },[area])

  return(
    <>
    { isLoading &&  <Loading/>}
    <Wrapper>
      <Aside>
        <Selector selectList={selectList} setArea={setArea}/>
        <Inputs setFilterData={setFilterData} setArea={setArea} tourData={tourData} setIsSelect={setIsSelect}/>
      </Aside>
      <Main>
        <Outlet context={{isSelect,area,filterData}}/>
      </Main>
    </Wrapper>
    </>
  )
}

export default Tour