type ButtonProps = {
    name : string
    type : "submit" | "button" | "reset"
    onClick? : React.MouseEventHandler<HTMLButtonElement>
}
export default function Button(props: ButtonProps) {
    const { name, type, onClick } = props

    return (
        <button 
            type={type} 
            onClick={onClick}
            className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        > {name}</button>
    )
}