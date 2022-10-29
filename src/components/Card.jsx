
export default function Card({children}){
    return <div className={"bg-white shadow rounded-lg overflow-hidden"}>{children}</div>
}

function Title({children}){
    return <div className={"p-5 border-b"}>
                <div className="flex justify-between items-center">
                    {children}
                </div>
            </div>
}

function Body({children}){
    return <div className={"p-5 text-xl leading-relaxed"}>{children}</div>
}

function Footer({children}){
    return <div className={"bg-gray-200 p-5"}>{children}</div>
}

Card.Title = Title
Card.Body = Body
Card.Footer = Footer