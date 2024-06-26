"use client"

import Link from "next/link"
import { useState } from "react"

export default function JumbotronView() {

    const [searchBar, setSearchBar] = useState(false)

    const handleSearchBar = (e: any) => {
        e.preventDefault()
        setSearchBar(!searchBar)
    }
    return (
        <>
            <div className="w-full h-[600px] bg-slate-950 bg-blend-overlay bg-opacity-80" style={{ backgroundImage: "url('/images/jumbotron.jpg')", backgroundSize: "center" }}>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="text-center mb-6">
                        <h1 className="text-5xl font-bold text-white">SISTEM INFORMASI GEOGRAFIS</h1>
                        <h2 className="text-4xl font-bold text-orange-500">BENGKEL MOTOR</h2>
                    </div>

                    <div className="flex justify-center gap-6 w-full max-w-screen-md">
                        <Link href={"/more"} className="py-3 px-6 bg-orange-500 text-white font-semibold rounded transition-all duration-1000">
                            Tampilkan Data Persebaran Bengkel
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}