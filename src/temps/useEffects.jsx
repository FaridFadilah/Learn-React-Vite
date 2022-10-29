import React from 'react'

export default function useEffects() {
    const [name, setName] = useState("")
  const [online, setOnline] = useState(false)
  const [scroll, setScroll] = useState(window.scroll)
  
  useEffect(() => {
    //* ini akan dipanggil setiap render terjadi
    // console.log("I always render")
  }) 
  
  useEffect(() => {
    // * ini akan dipanggil ketika pertama kali dirender
    // console.log("First Render")
  }, [])

  useEffect(() => {
    // * ini akan dipanggil ketika nilai dari state berubah
    // console.log(`i am now ${online ? "Online" : "Offline"}`)
  }, [online])

// ComponentWillUnmount
  function updateScrollPosition(){
    const windowScrolling = window.scrollY
    console.log(`Window scroll position : ${windowScrolling}`)
    setScroll(windowScrolling)
  }

  function onKeyDown(e){

  }

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition)
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  })
  return (
    <div className="h-[4000px]">
      <Card>
        <Card.Title>useRef Hooks</Card.Title>
        <Card.Body>
          <Input className="border" value={name} onChange={(e) => setName(e.target.value)} isFocus />
          <Button onClick={() => setOnline(online => !online)} className="text-white bg-black">Set Online</Button>
        </Card.Body>
        {/* <Card.Footer>you clicked  {tick.current} times</Card.Footer> */}
      </Card>
    </div>
  )
}
