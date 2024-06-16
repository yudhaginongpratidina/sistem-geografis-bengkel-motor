"use client"
import Link from "next/link"
import TextField from "@/components/text-field"
import Button from "@/components/button"
import Swal from 'sweetalert2'
import { useState } from "react"

export default function Page() {

    const [name, setName] = useState("")

    const createCategories = async (e : any) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3000/api/category", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name
                })
            })

            const data = await response.json()

            if (data.status === 400) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            if (data.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });

                setInterval(() => {
                    window.location.href = "/dashboard/category"
                }, 2000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="w-full py-6 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold uppercase">tambah data kategori</h1>
                    <h2 className="text-lg">Silahkan isi form dibawah ini</h2>
                </div>
                <Link href={"/dashboard/category"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Kembali</Link>
            </div>
            <div className="w-full">
                <form onSubmit={createCategories} className="flex flex-col gap-1.5">
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
                        name={"Tambah"} 
                        type={"submit"}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                    />
                </form>
            </div>
        </>
    )
}