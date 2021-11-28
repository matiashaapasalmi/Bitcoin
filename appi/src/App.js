import './App.css';
import {useEffect, useState} from "react";
const axios = require("axios").default;

let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur";

let action;

const tekstityyli = {
    
  padding: "300px 300px 300px 600px",
  justifyContent: "center",
  alignItems: "center",
}

function App() {

  const [state, setState] = useState({})
  
  useEffect(()=>{
    axios.get(url).then(res => {

      setState(res.data);
    
    })
  }, [])


  function getData(val)
  {
    console.warn(val.target.value)
  }

  return (

    <div style={tekstityyli}>
      Set range from start to finish in (ddmmyyyy)
      <div>
      <label>Start   </label> 
      <input type="text" onChange={getData}  />
      <label>Finish   </label>
      <input type="text" onChange={getData}  />
      </div>
     
      
      


    {JSON.stringify(state)}
    </div>
  );
}

export default App;
