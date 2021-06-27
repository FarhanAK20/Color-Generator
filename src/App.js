import React,{useState,useEffect} from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

function App() {
  const [color,setColor] = useState('');
  const[weight,setWeight] = useState(1);
  const [error,setError] = useState(false);
  const[list,setList] = useState(new Values('#00008B').all(5));
  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
    let colors = new Values(color).all(weight);
    console.log(colors)
    setList(colors);
    setError(false)
    console.log(weight)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }


  return (
    <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#00008B"
        className={`${error ? 'error':null}`}></input>
        <input type="number" placeholder="weight%" value={weight} onChange={(e)=>setWeight(parseInt(e.target.value))} ></input>
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color,index)=>{
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
      })}
    </section>
    </>
  );
}

export default App;
