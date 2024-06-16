"use client"
import { useState } from "react"
import TextField from "@/components/text-field"
import Button from "@/components/button"

export default function Page() {

    const [formTitle, setFormTitle] = useState("LOGIN TO DASHBOARD")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const changeFormTitle = (e:any) => {
        e.preventDefault()

        if (formTitle === "LOGIN TO DASHBOARD") {
            setFormTitle("REGISTER") 
        } else {
            setFormTitle("LOGIN TO DASHBOARD")
        }
    }

    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center bg-slate-950">
                <div className="w-full max-w-screen-sm h-[400px] shadow-md drop-shadow-md bg-slate-800">
                    <div className="w-full py-6 flex flex-col justify-center items-center gap-0.5">
                        <h1 className="text-2xl font-bold text-white">{formTitle}</h1>
                        <h2 className="text-orange-500 text-lg">Enter your username and password</h2>
                    </div>
                    <div className="w-full container">
                        <form action="" className="mb-3">
                            <TextField
                                id={"username"}
                                label={true}
                                name={"username"}
                                type={"text"}
                                placeholder={""}
                                value={username}
                                required={true}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-transparent border-orange-500 text-white"
                            />
                            <TextField
                                id={"password"}
                                label={true}
                                name={"password"}
                                type={"password"}
                                placeholder={""}
                                value={password}
                                required={true}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-transparent border-orange-500 text-white"
                            />
                            <Button
                                name={formTitle === "LOGIN TO DASHBOARD" ? "Login" : "Register"}
                                type={"submit"}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                            />
                        </form>
                        <Button
                            name={formTitle === "LOGIN TO DASHBOARD" ? "I don't have an account" : "I already have an account"}
                            type={"button"}
                            onClick={(e) => changeFormTitle(e)}
                            className="text-white font-medium hover:underline hover:underline-offset-4"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}