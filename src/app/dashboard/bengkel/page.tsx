"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {

    type modelBengkel = {
        id : number
        name : string
        alamat : string
        buka : string
        telp : string
        latitude : string
        longitude : string
    }

    const [bengkels, setBengkels] = useState<modelBengkel[]>([]);

    const getBengkels = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/bengkel")
            const { data } = await response.json()
            setBengkels(data)

            // -------------------------------------------------------------------------
            // debug
            // -------------------------------------------------------------------------
            // console.table(data)
            // -------------------------------------------------------------------------
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBengkels()
    }, [])
    return (
        <>
            <div className="w-full py-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold uppercase mb-6">data bengkel</h1>
                <Link href={"/dashboard/bengkel/create"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Tambah Data Bengkel</Link>
            </div>
            <table className="w-full select-none overflow-x-auto">
                <thead>
                    <tr className="overflow-x-auto">
                        <th className="py-2 border uppercase w-[60px]">no</th>
                        <th className="px-4 py-2 border uppercase text-start w-[250px]">nama</th>
                        <th className="px-4 py-2 border uppercase text-start">buka</th>
                        <th className="px-4 py-2 border uppercase text-start w-[200px]">no telp</th>
                        <th className="px-4 py-2 border uppercase text-start">kordinat</th>
                        <th className="py-2 border uppercase w-[100px]">aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bengkels.map((bengkel, index) => (
                            <tr key={index}>
                                <td className="py-2 border text-center">{index + 1}</td>
                                <td className="px-4 py-2 border capitalize">{bengkel.name}</td>
                                <td className="px-4 py-2 border capitalize">{bengkel.buka}</td>
                                <td className="px-4 py-2 border capitalize">{bengkel.telp}</td>
                                <td className="px-4 py-2 border capitalize">{bengkel.latitude}, {bengkel.longitude}</td>
                                <td className="px-4 py-2 border">
                                    <Link href={`/dashboard/bengkel/edit/${bengkel.id}`} className="py-2 px-7 bg-orange-500 text-white font-medium hover:font-bold hover:bg-orange-600 duration-200 mr-2">Edit</Link>
                                    <Link href={`/dashboard/bengkel/delete/${bengkel.id}`} className="py-2 px-7 bg-red-500 text-white font-medium hover:font-bold hover:bg-red-600 duration-200">Hapus</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}