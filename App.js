import useInc from "./useInc";

function App() {
  const [num, addTen] = useInc();
  return (
    <div>
      <h1>{num} times clicked</h1>
      <button onClick={addTen}>Add 10</button>
    </div>
  );
}

export default App;
