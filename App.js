
function App() {
  const info = [
    {id:1,name:"anurag"},
    {id:2,name:"raja"},
    {id:3,name:"shiv"},
    {id:4,name:"sati"}
  ];

  return (
    <>
      <h4>
        {
          info.map((key)=>(
            <p>{key.id} - {key.name} </p>
          ))
        }
      </h4>
    </>
  );
}

export default App;
