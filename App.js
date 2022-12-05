import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(10);
  useEffect(() => {
    console.log("loaded on page reload and everytime value of num")
  },[num])
  return (
    <div>
      <h1>{num} times clicked</h1>
      <button onClick={() => {setNum(num+5)}}>Add 5</button>
    </div>
  );
}

export default App;
