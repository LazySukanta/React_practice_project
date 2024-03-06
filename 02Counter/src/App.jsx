
function App() {
  let value = 2
  const addValue =  () => {
    console.log("Clicked");
    value = value+1
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {value}</h2>
      <button
        onClick={ addValue }
      
      >Add value</button>
      <button>Remove value</button>
    </>
  )
}

export default App
