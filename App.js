import A from "./A";
import useInc from "./useInc";

function App() {
  const [num, addTen] = useInc();
  return (
    <A name = "hey there"/>
  );
}

export default App;
