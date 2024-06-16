"use client"
import Link from "next/link"
import TextField from "@/components/text-field"
import Button from "@/components/button"
import Swal from 'sweetalert2'

import { useState, useEffect } from "react"


export default function Page({ params }: { params: { id: number } }) {

    type modelCategory = {
        id : number
        name : string
    }

    const { id } = params

    const [name, setName] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [alamat, setAlamat] = useState("")
    const [buka, setBuka] = useState("")
    const [telp, setTelp] = useState("")
    const [kordinat, setKordinat] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const [categories, setCategories] = useState<modelCategory[]>([]);

    const getBengkelById = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/bengkel?id=${id}`)
            const {data}  = await response.json()
            // console.log(data[0])
            setName(data[0].name)
            // setCategoryId(data[0].kategoriId)
            setCategoryId(String(data[0].categoryId));
            setAlamat(data[0].alamat)
            setBuka(data[0].buka)
            setTelp(data[0].telp)
            setLatitude(data[0].latitude)
            setLongitude(data[0].longitude)
        } catch (error) {
            console.log(error)
        }
    }

    const getCategories = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/category")
            const { data } = await response.json()
            setCategories(data)

            // -------------------------------------------------------------------------
            // debug
            // -------------------------------------------------------------------------
            // console.table(data)
            // -------------------------------------------------------------------------
        } catch (error) {
            console.log(error)
        }
    }


    const updateBengkelById = async (e : any) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/api/bengkel?id=${id}`, {
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name,
                    categoryId,
                    alamat,
                    buka,
                    telp,
                    latitude,
                    longitude
                })
            })


            // console.log(response)

            const data = await response.json()
            // console.log(data)

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
                    window.location.href = "/dashboard/bengkel"
                }, 2000)
            }


        } catch (error) {
            console.log(error)
        }
    }



    const setLatitudeAndLongitude = (kordinat : string) => {
        const [latitude, longitude] = kordinat.split(",")
        setLatitude(latitude.trim())
        setLongitude(longitude.trim())
    }
    
    useEffect(() => {
        getBengkelById()
        getCategories()
    }, [])


    return (
        <>
            <div className="w-full py-6 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold uppercase">edit data bengkel</h1>
                    <h2 className="text-lg">Silahkan isi form dibawah ini</h2>
                </div>
                <Link href={"/dashboard/bengkel"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Kembali</Link>
            </div>
            <div className="w-full">
                <form action="" onSubmit={updateBengkelById} className="flex flex-col gap-1.5">
                    <TextField
                        id={"name"}
                        label={true}
                        name={"Nama Bengkel"}
                        type={"text"}
                        placeholder={"Bengkel Jaya Motor"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={true}
                    />
                    <div className="w-full flex flex-col gap-0.5 mb-4">
                        <label htmlFor="kategoriId" className="text-sm font-medium capitalize">Kategori Bengkel</label>
                        <select name="kategoriId" id="kategoriId" className="w-full p-2 border outline-none capitalize" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                            {/* <option value="">-- Pilih Kategori Bengkel Motor --</option> */}
                            <option value={categoryId}  className="capitalize">
                                {
                                    categories.find((category) => Number(categoryId) == category.id)?.name
                                }
                            </option>
                            {
                                categories.map((category) => (
                                    <option key={category.id} value={category.id} className="capitalize">{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <TextField
                        id={"alamat"}
                        label={true}
                        name={"Alamat Bengkel"}
                        type={"text"}
                        placeholder={"Jln ...."}
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        required={true}
                    />
                    <TextField
                        id={"buka"}
                        label={true}
                        name={"Buka Pada"}
                        type={"text"}
                        placeholder={"senin - jumat pukul 08.00 - 16.00"}
                        value={buka}
                        onChange={(e) => setBuka(e.target.value)}
                        required={true}
                    />
                    <TextField
                        id={"telp"}
                        label={true}
                        name={"Nomer Telp"}
                        type={"text"}
                        placeholder={"+62 000-0000-..."}
                        value={telp}
                        onChange={(e) => setTelp(e.target.value)}
                        required={true}
                    />
                    <div className="py-2">
                        <TextField 
                            id={"kordinat"} 
                            label={true} 
                            name={"Kordinat"} 
                            type={"text"} 
                            placeholder={"0.000000, 0.000000"} 
                            value={kordinat} 
                            onChange={(e) => setKordinat(e.target.value)}
                            required={false}
                        />
                        <Button 
                            name={"Set Kordinat"} 
                            type={"button"}
                            className="bg-slate-500 hover:bg-slate-600 text-white"
                            onClick={() => setLatitudeAndLongitude(kordinat)}
                        />
                    </div>
                    <TextField
                        id={"latitude"}
                        label={true}
                        name={"Latitude"}
                        type={"text"}
                        placeholder={"0.000000"}
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        required={true}
                    />
                    <TextField
                        id={"longitude"}
                        label={true}
                        name={"Longitude"}
                        type={"text"}
                        placeholder={"0.000000"}
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
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