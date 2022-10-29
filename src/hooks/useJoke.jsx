import { useEffect, useState } from 'react'
import axios from "axios"

export default function useJoke(name) {
    const [joke, setJoke] = useState("")

    useEffect(() => {
      async function getData(){
        const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`)
        setJoke(data)
      }
      getData().then(r => r)
    }, [name])
    return joke
}
