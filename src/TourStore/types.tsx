export interface DataItem {
  Id: string;
  Name: string;
  Add:string;
  Picture1:string;
  Description:string;
  Opentime:string;
}


export interface TourState {
  tour: DataItem[]; 
  seletlist: string[]; 
  filterData: DataItem[]; 
}

export interface TourAction {
  type: 'SAVE_TOUR_DATA' | 'UPDATA_TOUR_LIST' | 'UPDATA_INPUT_TOUR_LIST';
  payload: {
    tour?: DataItem[]; 
    seletlist?: string[]; 
    filterData?: DataItem[]; 
  };
}