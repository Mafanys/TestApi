import React from "react";  
import useApiCurs from "../Custom-hook/Custom-hook";

const Header = () => {
  
    const curses = useApiCurs();

    return (
      <header className="header">
        <div className="headertext">
          {curses.map(item => (          
            <span key={item.ccy} >{item.ccy}: {item.buy} </span>          
          ))}
        </div>
        
      </header>
    )
}

export default Header;