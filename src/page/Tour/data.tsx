import { useEffect, useState } from "react";
const api="https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c"

export interface DataItem {
  Id: string;
  Name: string;
  Add:string;
  Picture1:string;
  Description:string;
  Opentime:string;
}
export const useGetData = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true); 

  const getApi = async () => {
    try {
      setIsLoading(true); 
      const res = await fetch(`${api}`);
      const jsonData = await res.json();
      setData(jsonData.data.XML_Head.Infos.Info);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return { data, isLoading };
};