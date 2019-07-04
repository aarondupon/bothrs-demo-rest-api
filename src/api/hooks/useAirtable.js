import { useEffect, useState } from "react";
import Airtable from "./../airtable";
import * as R from 'ramda';

const group =  R.groupBy(R.prop('Categorie'));

const useAirtable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      Airtable.get((result)=>{
        setData(group(result))
      });
    };
    fetchData();
  }, []);
  return [data, setData];
};
export default useAirtable;
