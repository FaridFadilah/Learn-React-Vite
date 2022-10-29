import { forwardRef, useEffect, useRef } from "react"

const Input = forwardRef(({type = "text", ...props}, ref) => (
    <input ref={ref} {...props} type={type} className={"transition duration-300 w-full focus:ring focus:ring-blue-200 focus:border-blue-400 focus:outline-none text-black rounded-lg border-slate-300 shadow-sm"}/>
))

export default Input