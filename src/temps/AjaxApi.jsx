import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function AjaxApi() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers(){
      setLoading(true)
      try{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        setLoading(false)
      } catch(error) {
        console.log(error)
      }
    }
    getUsers().then(r => r)
  }, [])

  return (
    <Card>
        <Card.Title>Users : {users.length}</Card.Title>
        <Card.Body>
          {loading ? <div className="">Loading...</div> : <ol>
              {users.map(data => 
                <li key={data.id}>{data.name}</li>
               ) }
            </ol>}
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
  )
}
