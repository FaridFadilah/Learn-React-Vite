import React, { useRef, useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import Input from "./components/Input"
import PlaceContentCenter from "./components/PlaceContentCenter"
import useJoke from "./hooks/useJoke"

export default function App(){
  const nameRef = useRef()
  const [name, setName] = useState("Farid")
  const joke = useJoke(name)
  
  function generateJoke(e){
    e.preventDefault()
    setName(nameRef.current.value)
  }
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>
          <h1 className="text-2xl text-black">Joke</h1>
          <div className="w-1/2">
            <Input ref={nameRef}/>
          </div>
        </Card.Title>
        <Card.Body>
          <p className="mb-4">{joke.value}</p>
        </Card.Body>
        <Card.Footer>
          <Button onClick={generateJoke} className="bg-black text-white">Generate a Joke</Button>
        </Card.Footer>
      </Card>
    </PlaceContentCenter>
  )
}