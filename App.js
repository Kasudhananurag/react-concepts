import { useEffect, } from "react";

function App() {
  useEffect(()=>{
    console.log("loaded on page reload") 
  })
  return (
    <h1>using useEffect</h1>
  );
}

export default App;
