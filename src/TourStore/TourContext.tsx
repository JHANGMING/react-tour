
import { Reducer } from "react";
import { TourAction, TourState } from "./types";

export const initState:TourState={
  tour:[],
  seletlist:[],
  filterData:[]
}

export const TourReducer:Reducer<TourState, TourAction> =(state,action)=>{
  const {type,payload}=action; 

  switch (type) {
    case 'SAVE_TOUR_DATA':
      return {
        ...state,
        tour: payload.tour || [], 
        seletlist: payload.seletlist || [] 
      };
    case 'UPDATA_TOUR_LIST':
    case 'UPDATA_INPUT_TOUR_LIST':
      return {
        ...state,
        filterData: payload.filterData || [] 
      };
    default:
      return state;
  }
}