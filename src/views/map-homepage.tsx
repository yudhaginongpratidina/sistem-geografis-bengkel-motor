"use client"
import MapLeaflet from "@/components/map-leafleat"
import HorizontalListMapView from "./horizontal-list-map";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { useEffect, useState } from "react";


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

export default function MapHomePageView(){

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
            // console.log(data)
            // -------------------------------------------------------------------------
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBengkels()
    }, [])


    return (
        <div className="py-8 flex flex-col justify-center items-center">
            <div className="py-6">
                <h1 className="text-4xl uppercase text-center">PETA PERSEBARAN BENGKEL WILAYAH BLITAR</h1>
                <h2 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla?</h2>
            </div>
            <div className="container">
                <MapLeaflet api={bengkels} />
            </div>
            <div className="w-full max-w-screen-lg container flex flex-col gap-6 py-6">
                <HorizontalListMapView api={bengkels} />
            </div>
            <div className="py-4">
                <Link href={"/more"} className="text-orange-500 font-bold py-4 px-6 bg-slate-950 hover:bg-orange-500 hover:text-white duration-200 rounded flex gap-4 items-center">
                    <span className="animate-pulse">Tampilkan Lebih Banyak</span>
                    <FaArrowRightLong className="w-6 h-6 animate-pulse" />
                </Link>
            </div>
        </div>
    )
}