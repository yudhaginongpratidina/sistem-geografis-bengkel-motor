"use client"
import Link from "next/link"
import TextField from "@/components/text-field"
import Button from "@/components/button"

import { useState } from "react"

export default function Page({ params }: { params: { id: number } }) {

    const { id } = params
    const [name, setName] = useState("")
    // console.log(id)
    

    return (
        <>
            <div className="w-full py-6 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold uppercase">edit data kategori : {id}</h1>
                    <h2 className="text-lg">Silahkan isi form dibawah ini</h2>
                </div>
                <Link href={"/dashboard/category"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Kembali</Link>
            </div>
            <div className="w-full">
                <form action="" className="flex flex-col gap-1.5">
                    <TextField 
                        id={"name"} 
                        label={true} 
                        name={"Nama Kategori"} 
                        type={"text"} 
                        placeholder={"Bengkel Yamaha"} 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required={true}
                    />
                    <Button 
                        name={"Edit"} 
                        type={"submit"}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                    />
                </form>
            </div>
        </>
    )
}