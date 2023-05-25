import Button from "./button";
import styles from "./App.modul.css";
import { useEffect, useState } from "react";

function App() {
  const [counter,setCounter] = useState(0);
  const [keyWord, setKeyWord] = useState("");

  const onClick = () => {
      setCounter((v) => v+1);
  };
  const onChange = (event) =>{
    setKeyWord(event.target.value);
  }
  useEffect(()=>{
   console.log("once");
  },[]);

  useEffect(()=>{
      console.log("serch" );
    },[keyWord]);
    useEffect(()=>{
      console.log("count" );
    },[counter]);

  return (
    <div>
    <input value={keyWord} onChange={onChange} type="text" placeholder="Surch here..."></input>
    <h1>{counter}</h1>
    <button onClick={onClick}>click</button>

    </div>
  );
}

export default App;
