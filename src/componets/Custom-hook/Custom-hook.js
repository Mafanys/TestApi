import { useEffect, useState } from "react";

const useApiCurs = () => {
  const [curs, setCurs] = useState([]);

  useEffect(()=>{
    fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5")
      .then((resp) => resp.json())    
      .then(item => setCurs(item))   
  }, []);

  return curs
}

export default useApiCurs;