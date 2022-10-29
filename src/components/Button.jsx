import clsx from "clsx"

export default function Button({type = "button", children, text, className = "bg-black text-black", ...props}){
    return <button {...props} type={type} className={clsx(className, "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 whitespace-nowrap inline-flex justify-center items-center gap-x-4 rounded px-4 h-10")}>{text ||children}</button>
  }