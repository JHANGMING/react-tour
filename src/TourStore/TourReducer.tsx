import { ReactNode, createContext ,useContext,useReducer, useState} from "react";
import { TourReducer, initState } from "./TourContext";
import { DataItem, TourAction, TourState } from "./types";


// export const TourContext=createContext(initState)

export const TourContext = createContext<{
  state: TourState;
  dispatch: React.Dispatch<TourAction>;
  isSelect: boolean;
  inputValue: string;
  selectValue: string;
  area: string;
  filterData: DataItem[];
  seletlist: string[]; 
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputArea: (area: string) => void;
  addTourData: (data: DataItem[]) => void;
  selectArea: (area: string) => void;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}>({
  state: initState,
  dispatch: () => {},
  isSelect: false,
  inputValue: "",
  selectValue: "",
  area: "",
  filterData:[],
  seletlist:[],
  setInputValue: () => {},
  inputArea: () => {},
  addTourData: () => {},
  selectArea: () => {},
  setSelectValue: () => {}
});


export const TourProvider:React.FC<{children: ReactNode}>=({children})=>{ 
  const [state,dispatch]=useReducer(TourReducer,initState)
  const [isSelect,setIsSelect]=useState<boolean>(false)
  const [area,setArea]=useState<string>("")
  const [inputValue,setInputValue]=useState("")
  const [selectValue, setSelectValue] = useState("");
  const addTourData=(data:DataItem[])=>{
    const newdata=data.map((item)=>{
        const {Add}=item
        const regex = /([\u4e00-\u9fa5]+?)區/;
        const match = Add.match(regex);
        const area =match ? match[0] : '';
        return area
      })
      const sortdData= newdata.filter(
      (item, index) => newdata.indexOf(item) === index
    );
    dispatch({
      type:'SAVE_TOUR_DATA',
      payload:{
        tour:data,
        seletlist:sortdData
      }
    })
  }
  const selectArea=(area:string)=>{
    setIsSelect(true)
    setArea(area)
    setInputValue("")
    const newData=state.tour.filter((item)=>item.Add.includes(area))
    dispatch({
      type:'UPDATA_TOUR_LIST',
      payload:{filterData:newData}
    })
  }
  const inputArea=(area:string)=>{
    setIsSelect(true)
    setSelectValue("")
    setArea("")
    const newData=state.tour.filter((item)=>item.Name.includes(area))
    dispatch({
      type:'UPDATA_INPUT_TOUR_LIST',
      payload:{filterData:newData}
    })
  }

  const value={
    seletlist:state.seletlist,
    filterData:state.filterData,
    state, 
    dispatch,
    isSelect,
    inputValue,
    selectValue,
    area,
    setInputValue,
    inputArea,
    addTourData,
    selectArea,
    setSelectValue
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