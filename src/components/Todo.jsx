import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

export default function Todo() {
  const [task, setTask] = useState("")
  const [newTask, setNewTask] = useState("")
  const localData = window.localStorage.getItem("task")
  
  function handleClick(e){
    e.preventDefault()
    setTask(prevTask => [...prevTask, {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        complete: false 
    }])
    setNewTask("")
  }
  useEffect(() => window.localStorage.setItem("task", JSON.stringify(task)), [task])

  function handleCompleteTask(id){
    const updateTask = task.map((task) => {
        if(id === task.id) return {...task,complete: !task.complete}
        return task 
    })
    setTask(updateTask)
  }

  function handleRemoveTask(id){
    const removeTask = task.filter(task => task.id !== id)
    setTask(removeTask)
    // localStorage.removeItem("task")
  }
  return (
    <Card className="">
        <Card.Title>Todo</Card.Title>
        <Card.Body>
                <form>
                    <div className="flex items-center gap-x-2">
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                        <Button onClick={handleClick} className={"text-white bg-black"} text={"Add Tasks"}/>
                        <Button onClick={() => localStorage.removeItem("task")} className={"text-white bg-black"} text={"Delete Tasks"}/>
                    </div>
                </form>
                {localData.length > 3 ? 
                    <ol className={"space-y-2  mt-4"}>
                        {JSON.parse(localData).map(task  => (
                        <li key={task.id} className={"flex items-center justify-between"}>
                            <span>{task.name} {task.complete ? "✅" : "🗿"} </span>
                            <div className="flex items-center gap-2">
                                <Button className="px-2 py-1 text-black border text-xs" onClick={() => handleCompleteTask(task.id)}>
                                    Mark as {task.complete ? "incompleted" : "completed"}
                                </Button>
                                <Button className="px-2 py-1 text-black border text-xs" text='remove' onClick={() => handleRemoveTask(task.id)}/>
                            </div>    
                        </li>
                        ))}
                    </ol>
                : <div className="p-3"><h1 className="text-lg">Task Not Found</h1></div>}
        </Card.Body>
        <Card.Footer>You have {task.length} tasks</Card.Footer>
    </Card>
  )
}