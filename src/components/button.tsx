type ButtonProps = {
    name : string
    type : "submit" | "button" | "reset"
    onClick? : React.MouseEventHandler<HTMLButtonElement>
    className? : string
}
export default function Button(props: ButtonProps) {
    const { name, type, className, onClick } = props

    return (
        <button 
            type={type} 
            onClick={onClick}
            className={`w-full p-2 font-bold rounded ${className}`}
        > {name}</button>
    )
}