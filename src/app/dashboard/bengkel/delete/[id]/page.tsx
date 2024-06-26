"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2'

export default function Page({ params }: { params: { id: number } }) {
    const { id } = params
    const [name, setName] = useState("")

    const getBengkelById = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/bengkel?id=${id}`)
            const data = await response.json()
            // setName(data[0].name)
            // console.log(data.data[0].name)
            setName(data.data[0].name)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteBengkelById = async (e : any) => {
        try {
            const response = await fetch(`http://localhost:3000/api/bengkel?id=${id}`, {
                method : "DELETE"
            })

            const data = await response.json()
            // console.log(data)

            if (data.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            setInterval(() => {
                window.location.href = "/dashboard/bengkel"
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBengkelById()
    }, [])
    return (
        <>
            <div className="w-full h-[200px] shadow-md drop-shadow-md flex flex-col justify-center px-6 py-2 border">
                <h1 className="text-2xl font-medium mb-4">Apakah anda yakin ingin menghapus data bengkel <span className="font-bold text-red-500 uppercase">{name}</span> ?</h1>
                <div className="flex gap-2.5 items-center">
                    <button onClick={deleteBengkelById} className="py-2 px-4 bg-red-500 text-white font-medium hover:font-bold hover:bg-red-600 duration-200">Ya, Saya Yakin</button>
                    <Link href={"/dashboard/bengkel"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Tidak, Kembali</Link>
                </div>
            </div>
        </>
    )
}