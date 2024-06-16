import MapLeaflet from "@/components/map-leafleat"
import HorizontalListMapView from "./horizontal-list-map";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MapHomePageView(){

    const data = [
        {
            id: 1,
            name: "Bengkel 1",
            category_bengkel: "Yamaha",
            latitude: -8.098639089698542,
            longitude: 112.16270366674483
        },
        {
            id: 2,
            name : "Bengkel 2",
            category_bengkel: "Yamaha",
            latitude: -8.094326000773586, 
            longitude: 112.16927253183778
        },
        {
            id: 3,
            name : "Bengkel 2",
            category_bengkel: "Yamaha",
            latitude: -8.094326000773586, 
            longitude: 112.16927253183778
        },
        {
            id: 4,
            name : "Bengkel 2",
            category_bengkel: "Yamaha",
            latitude: -8.094326000773586, 
            longitude: 112.16927253183778
        },
        {
            id: 5,
            name : "Bengkel 2",
            category_bengkel: "Yamaha",
            latitude: -8.094326000773586, 
            longitude: 112.16927253183778
        },
        {
            id: 6,
            name : "Bengkel 2",
            category_bengkel: "Honda",
            latitude: -8.094326000773586, 
            longitude: 112.16927253183778
        },
    ]

    return (
        <div className="py-8 flex flex-col justify-center items-center">
            <div className="py-6">
                <h1 className="text-4xl uppercase text-center">PETA PERSEBARAN BENGKEL WILAYAH BLITAR</h1>
                <h2 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla?</h2>
            </div>
            <div className="container">
                <MapLeaflet api={data} />
            </div>
            <div className="w-full max-w-screen-xl container grid grid-cols-3 gap-6 py-6">
                <HorizontalListMapView api={data} />
            </div>
            <div className="py-4">
                <Link href={"/"} className="text-orange-500 font-bold py-4 px-6 bg-slate-950 hover:bg-orange-500 hover:text-white duration-200 rounded flex gap-4 items-center">
                    <span className="animate-pulse">Tampilkan Lebih Banyak</span>
                    <FaArrowRightLong className="w-6 h-6 animate-pulse" />
                </Link>
            </div>
        </div>
    )
}