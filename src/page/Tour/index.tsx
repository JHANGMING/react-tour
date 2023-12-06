import { Outlet} from "react-router-dom"
import { Aside, Main, Wrapper } from "./styled"
import Inputs from "../../components/Inputs"
import { useGetData } from "./data"
import { useEffect } from "react"
import Loading from "../../components/Loading"
import Selector from "../../components/Selector"
import { useTour } from "../../TourStore/TourReducer"


const Tour=()=>{
  const { data: tourData, isLoading } = useGetData();
  const {addTourData}=useTour()

  useEffect(()=>{
    if(tourData){
      addTourData(tourData)
    }
  },[tourData])

  return(
    <>
    { isLoading &&  <Loading/>}
    <Wrapper>
      <Aside>
        <Selector/>
        <Inputs />
      </Aside>
      <Main>
        <Outlet/>
      </Main>
    </Wrapper>
    </>
  )
}

export default Tour