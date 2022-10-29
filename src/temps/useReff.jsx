import React, { useRef } from 'react'
import Card from '../components/Card'

export default function useReff() {
  const inputRef = useRef(null)
  // const [tick, setTick] = useState(0)
  function handleClick(){
    inputRef.current.focus()
    // tick.current = tick.current +1

    
    // const nextTick = tick +1
    // setTick(nextTick)
    // console.log(inputRef)
  }
  return (
    <Card>
      <Card.Title>useRef Hooks</Card.Title>
      <Card.Body>
        <Input className="border" placeholder={"email"} isFocus />
        <Input className="border" placeholder={"password"} isFocus />
        <Button className="text-white bg-black" onClick={handleClick}>Tick</Button>
      </Card.Body>
      {/* <Card.Footer>you clicked  {tick.current} times</Card.Footer> */}
    </Card>
  )
}
