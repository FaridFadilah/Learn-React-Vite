import Button from "./components/Button"
import Card from "./components/Card"

export default function App(){
  return (
    <div className="min-h-screen bg-blue-50 text-slate-800 justify-center items-center flex text-2xl tracking-tight antialiased">
      <div className="max-w-md w-full">
        <Card>
          <Card.Title>Hello World</Card.Title>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi temporibus fugiat delectus facere velit perferendis cum cumque aut ipsum, possimus esse veritatis, corporis quaerat officia, perspiciatis laudantium earum similique?
          </Card.Body>
          <Card.Footer>
            <Button>Submit</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}
