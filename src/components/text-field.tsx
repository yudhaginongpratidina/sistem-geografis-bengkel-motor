type TextFieldProps = {
    id : string,
    label : boolean,
    name : string,
    type : "text" | "password" | "email" | "number",
    placeholder : string,
    value : string
    required : boolean,
    className? : string
    onChange? : React.ChangeEventHandler<HTMLInputElement>
}

export default function TextField(props: TextFieldProps) {
    const { id, label, name, type, placeholder, value, required, className, onChange } = props
    return (
        <div className="w-full flex flex-col gap-0.5 mb-4">
            {label &&
                <label 
                htmlFor={id}
                className={`text-sm font-medium capitalize ${className}`}
            >{name}</label>
            }
            <input 
                type={type}  
                id={id} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                required ={required}
                onChange={onChange} 
                className={`w-full p-2 border outline-none ${className}`} 
            />
        </div>
    )
}