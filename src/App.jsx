
import './App.css';
import Counter from './Counter';
import Users from './Users';

function App() {
  
function handleClick(){  //regular function
  alert('button 1 clicked')
}
const  handleClick2 = () =>alert('button 2 gutha marsos?')   //arrow function
// button 3 টা onClick এর ভিতর function লেখা হল।
const addToFive = (num) =>{  // function এ প্যারামিটার দিলে onClick এ object এর ভিতর function লিখে call করতে হয়।
  alert(num+5)
}

  return (
    <>
      <h3>React core concept 2v</h3>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>click 2</button> 
      <button onClick={()=>{alert('button 3 clicked')}}>click 3</button>  
      <button onClick={() => addToFive(10)}>click 4</button>
    </> 
  )
}

export default App
