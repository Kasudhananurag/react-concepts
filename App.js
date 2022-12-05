import { createContext } from "react";
import A from "./A";
import useInc from "./useInc";

const data = createContext();

function App() {
  const name = "anurag";
  
  return (
    <>
      <data.Provider value={name}>
        <A name="hey there" />
      </data.Provider>
    </>
  );
}

export default App;
export {data};
