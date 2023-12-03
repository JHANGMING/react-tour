import { Value } from "./TodoContext";

export const initState:Value={
  tour:[],

}
type TodoAction = {
  type: string;
  payload: any; // 根据实际情况定义 payload 的类型
};
export const TodoReducer=(state,action:TodoAction)=>{
  const {type,payload}=action; 
  console.log(payload);
  
  switch (type) {

    case "SAVE_DATE":
      return { ...state, ...action.payload };

    default:
      return state
  }
}