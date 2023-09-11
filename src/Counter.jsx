import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{border:'3px solid orange', marginBottom:'8px'}}>
            <h3>Counter: {count}</h3>
            <button style={{backgroundColor:'green', marginRight:'5px'}} onClick={handleAdd}>increase</button>
            <button style={{backgroundColor:'red' , marginBottom:'8px'}} onClick={handleReduce}>dicrease</button>
        </div>
    )
}