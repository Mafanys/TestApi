import React, { useEffect, useState } from "react";  

const url = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5";

const Header = () => {
  const [curs, setCurs] = useState([]);

  useEffect(()=>{
    fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5")
      .then((resp) => resp.json())    
      .then(item => setCurs(item))   
  }, [])

    console.log(curs);
    return (
      <header>
        {curs.map(item => (          
          <h3>{item.ccy}: {item.buy} </h3>          
        ))}
      </header>
    )
}

export default Header;