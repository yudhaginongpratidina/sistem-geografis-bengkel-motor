"use client"
import MapLeaflet from "@/components/map-leafleat"
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import TextField from "@/components/text-field";

import { useEffect, useState } from "react";
import Button from "@/components/button";


type modelCategory = {
    name : string
}

type modelBengkel = {
    id: number
    name: string
    buka : string
    category:  modelCategory
    latitude: number
    longitude: number
}



export default function MapMoreView(){

    const [bengkels, setBengkels] = useState<modelBengkel[]>([]);
    const [sector, setSector] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    // const [search, setSearch] = useState<string>("");
    // const [searchResult, setSearchResult] = useState<modelBengkel[]>([]);

    const getBengkels = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/bengkel")
            const { data } = await response.json()
            setBengkels(data)

            // -------------------------------------------------------------------------
            // debug
            // -------------------------------------------------------------------------
            // console.table(data)
            // console.log(data)
            // -------------------------------------------------------------------------
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBengkels()
    }, [])


    // const handleSearchBengkel = async (e: React.FormEvent<HTMLFormElement>) => {
    //     try {
    //         e.preventDefault()
    //         console.log(sector, category)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



    return (
        <div className="py-8 flex flex-col justify-center items-center">
            <div className="py-6">
                <h1 className="text-4xl uppercase text-center">SEMUA DATA BENGKEL MOTOR SE WILAYAH BLITAR</h1>
                <h2 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla?</h2>
            </div>
            <div className="container">
                <MapLeaflet api={bengkels} />
            </div>

            {/* <form onSubmit={handleSearchBengkel} className="container w-full max-w-screen-lg bg-slate-950 my-6 flex items-center gap-5 py-6">
                    <TextField 
                        id={"sektor"} 
                        label={false} 
                        name={"Sektor"} 
                        type={"text"} 
                        placeholder={"Masukkan nama sektor"} 
                        value={sector} 
                        onChange={(e) => setSector(e.target.value)}
                        required={true}
                        className="text-orange-500"
                    />
                    <TextField 
                        id={"kategori_benkel"} 
                        label={false} 
                        name={"Kategori Bengkel"} 
                        type={"text"} 
                        placeholder={"Honda"} 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} 
                        required={true}
                        className="text-orange-500"
                    />
                    <Button 
                        name={"Cari"} 
                        type={"submit"}
                        className="text-white font-bold py-2.5 px-6 bg-orange-400 hover:bg-orange-500 duration-200 rounded"
                    />
            </form> */}

            <div className="w-full max-w-screen-lg container flex flex-col gap-6 py-6">
                {bengkels.map((item: modelBengkel) => (
                    <Link href={`/bengkel/${item.id}`} key={item.id}>
                        <div className="flex items-center shadow-md drop-shadow-md border gap-2.5 h-[120px]">
                            <div className="w-[120px] h-full bg-slate-950 flex justify-center items-center">
                                <FaArrowRightLong className="w-16 h-16 text-orange-500" />
                            </div>
                            <div className="flex flex-col gap-2.5 px-4">
                                <h1 className="text-xl font-semibold uppercase mt-4">{item.name}</h1>
                                <div className="mb-4 flex gap-2">
                                    <span className="text-orange-500 bg-slate-950 py-1.5 px-4 rounded-full">{item.category.name}</span>
                                    <span className="text-orange-500 bg-slate-950 py-1.5 px-4 rounded-full">{item.buka}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}