"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Page() {

    type modelActivity = {
        id: number
        name: string
        description: string
        createdAt: string
    }

    const [countCategory, setCountCategory] = useState(0)
    const [countBengkel, setCountBengkel] = useState(0)
    const [activity, setActivity] = useState<modelActivity[]>([])

    const getCountData = async () => {
        try {
            const response = await fetch("/api/data-count")
            const {data} = await response.json()

            // console.log(data)

            setCountCategory(data.category)
            setCountBengkel(data.bengkel)
        } catch (error) {
            console.log(error)   
        }
    }

    const getActivity = async () => {
        try {
            const response = await fetch("/api/activity")
            const {data} = await response.json()

            // console.log(data)

            setActivity(data)
        } catch (error) {
            console.log(error)   
        }
    }

    useEffect(() => {
        getCountData()
        getActivity()
    }, [])
    return (
        <>
            <div className="w-full h-[200px] grid grid-cols-2 gap-4">
                <div className="w-full shadow-md drop-shadow-md">
                    <div className="w-full h-[125px] bg-black flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-white">{countCategory}</h1>
                    </div>
                    <div className="flex flex-col justify-center h-[75px] px-4">
                        <h1 className="text-xl font-medium uppercase">Category</h1>
                        <Link href={"/dashboard/category"} className="text-orange-500 hover:underline hover:underline-offset-4">Lihat Selengkapnya</Link>
                    </div>
                </div>
                <div className="w-full shadow-md drop-shadow-md">
                    <div className="w-full h-[125px] bg-black flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-white">{countBengkel}</h1>
                    </div>
                    <div className="flex flex-col justify-center h-[75px] px-4">
                        <h1 className="text-xl font-medium uppercase">Bengkel</h1>
                        <Link href={"/dashboard/bengkel"} className="text-orange-500 hover:underline hover:underline-offset-4">Lihat Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className="w-full py-6">
                <h1 className="text-3xl font-bold uppercase mb-6">aktivitas terakhir</h1>
                <div className="w-full border h-[400px] overflow-y-auto">
                    {
                        activity.map((data : modelActivity) => {
                            return (
                                <div className="w-full flex justify-between items-center p-4 border-b" key={data.id}>
                                    <div>
                                        <span className="text-md bg-slate-950 text-white p-2 rounded">
                                            {data.createdAt.slice(0, 10).split("-").reverse().join("-")}
                                        </span>
                                        <span> - </span>
                                        <span className="text-md bg-slate-950 text-white p-2 rounded">
                                            {data.createdAt.slice(11, 19)}
                                        </span>
                                        <span> - </span>

                                        { data.name === 'create' &&
                                            <span className="text-md bg-green-500 text-white p-2 rounded">
                                                {data.name}
                                            </span>
                                        }

                                        { data.name === 'updated' &&
                                            <span className="text-md bg-blue-500 text-white p-2 rounded">
                                                {data.name}
                                            </span>
                                        }

                                        { data.name === 'delete' &&
                                            <span className="text-md bg-red-500 text-white p-2 rounded">
                                                {data.name}
                                            </span>
                                        }

                                        { data.name === 'error' &&
                                            <span className="text-md bg-red-500 text-white p-2 rounded">
                                                {data.name}
                                            </span>
                                        }

                                        { data.name === 'login' &&
                                            <span className="text-md bg-orange-500 text-white p-2 rounded">
                                                {data.name}
                                            </span>
                                        }

                                        { data.name === 'logout' &&
                                            <span className="text-md bg-yellow-500-500 text-white p-2 rounded">
                                                {data.name}
                                            </span>
                                        }

                                        <span> - </span>
                                        <span className="text-md bg-slate-950 text-white p-2 rounded">
                                            {data.description}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}