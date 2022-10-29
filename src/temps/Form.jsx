import React, { useState } from 'react'

export default function Form() {
    const [form, setForm] = useState({
        name : "",
        email : "",
      })
    
      function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value })
      }
    
      function handleSubmit(e){
          e.preventDefault()
          console.log(form)
      }
  return (
        <Card>
            <Card.Title className={"text-black"}>Sign Up for new account</Card.Title>
            <form onSubmit={handleSubmit}>
            <Card.Body>
            <div className={"mb-5 border rounded-lg p-3"}>
                <p className={"text-blue-500"}>Name : {form.name || "..."}</p>
                <p className={"text-blue-500"}>Email : {form.email || "..."}</p>
            </div>
            <div className="mb-6">
                <Label value="Name" htmlFor="name"/>
                <Input onChange={handleChange} value={form.name} name="name" autoComplete="off" id=""/>
            </div>
            <div className="mb-6">
                <Label value="Email" htmlFor="name"/>
                <Input  onChange={handleChange} value={form.email} name="email" type="email" autoComplete="off" id=""/>
            </div>
            </Card.Body>
            <Card.Footer>
            <Button type="submit">
                <IconBrandGithub/>
                Register
            </Button>
            </Card.Footer>
            </form>
        </Card>
  )
}
