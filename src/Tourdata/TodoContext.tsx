import { ReactNode, createContext} from "react";
import { DataItem } from "../page/Tour/data";

interface Value {
  tour: DataItem[];
}

const TourContext=createContext({})

interface Props {
  children: ReactNode;
}
export const TourProvider:React.FC<Props>=({children})=>{ 
  const value:Value={
    tour:[]
  }
  return <TourContext.Provider value={value}>{children}</TourContext.Provider>
}




