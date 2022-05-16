import React, { useState } from "react";
import useApiCurs from "../Custom-hook/Custom-hook";

const Main = () => {

  const curses = useApiCurs();
  const [changeValue, setchangeValue] = useState({
    valueFirst: 0,
    valueSecond: 0, 
    selectValueFirst: 1,
    selectValueSecond: 1,
    flag: false
  });

  const handelSelectSecond = (e) => {
    setchangeValue({
      ...changeValue,
      selectValueSecond: e.target.value,
      flag: false
    })
  }

  const handelSelect = (e) => {
    setchangeValue({
      ...changeValue,
      selectValueFirst: e.target.value,
      flag: true
    })
  }
  const handelInputFirst = (e) => {
    
      if(changeValue.flag){
        setchangeValue({
          ...changeValue,
        valueFirst: e.target.value,
        valueSecond: changeValue.valueFirst / (changeValue.selectValueFirst / changeValue.selectValueSecond)
        })
      }else{
        setchangeValue({
          ...changeValue,
        valueFirst: e.target.value,
        valueSecond: changeValue.valueFirst / (changeValue.selectValueSecond / changeValue.selectValueFirst)
        })
      }
  }
  const handelInputSecond = (e) => {
    if(changeValue.flag){
      setchangeValue({
        ...changeValue,
        valueSecond: e.target.value,
        valueFirst: changeValue.valueSecond * (changeValue.selectValueFirst / changeValue.selectValueSecond)
      })
    } else {
      setchangeValue({
        ...changeValue,
        valueSecond: e.target.value,
        valueFirst: changeValue.valueSecond * (changeValue.selectValueSecond / changeValue.selectValueFirst)
      })
    }
    
  }
  
return(
  <div className="containermain">
    <h3 className="mainText">Convector valute</h3>    
    <form className="containermain-mainForm"> 
      <div>
        <input type="number" name="valueFirst" className="containermain-inputBlue" value={changeValue.valueFirst} onChange={handelInputFirst}/>

        <select onChange={handelSelect} value={changeValue.selectValueFirst}>
          {curses.map(item =>(
          <option key={item.ccy} value={item.buy}>{item.ccy}</option>
          ))}
        </select>
      </div>
      <div>
        <input type="number" name="valueSecond" className="containermain-inputYellow" value={changeValue.valueSecond}  onChange={handelInputSecond} />

        <select onChange={handelSelectSecond} value={changeValue.selectValue}>
          {curses.map(item =>(
          <option key={item.ccy} value= {item.buy}>{item.ccy}</option>
          ))}
        </select>
      </div>

      
    </form>
    
  </div>
 
)
}

export default Main;