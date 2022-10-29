import { useState } from "react"
import Button from "./Button"

export default function Count({initialValue}){
    let [count, setCount] = useState(initialValue)
    function handleClick(){
        setCount((prevState) => prevState +1)
    }
    return (
        <div className="">    
        <h1 className="text-5xl ">{count}</h1>
        <div className="mt-5 flex items-center gap-2">
            <Button onClick={() => handleClick()}>+</Button>
            <Button onClick={() => {
            handleClick()
            handleClick()
            handleClick()
            }}>+3</Button>
        </div>
        </div>
    )
}