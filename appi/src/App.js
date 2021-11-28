import './App.css';
import {useEffect, useState} from "react";
const axios = require("axios").default;

let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur";


function App() {

  const [state, setState] = useState({})
  
  useEffect(()=>{
    axios.get(url).then(res => {

      setState(res.data);
    
    })
  }, [])

  return (

    <div>
    {JSON.stringify(state)}
    </div>
  );
}

export default App;
