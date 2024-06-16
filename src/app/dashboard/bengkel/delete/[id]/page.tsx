import Link from "next/link"

export default function Page({ params }: { params: { id: number } }) {
    const { id } = params

    return (
        <>
            <div className="w-full h-[100px] shadow-md drop-shadow-md flex flex-col justify-center px-6 py-2 border">
                <h1 className="text-2xl font-medium mb-4">Apakah anda yakin ingin menghapus data ini : {id} ?</h1>
                <div className="flex gap-2.5 items-center">
                    <button className="py-2 px-4 bg-red-500 text-white font-medium hover:font-bold hover:bg-red-600 duration-200">Ya, Saya Yakin</button>
                    <Link href={"/dashboard/bengkel"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Tidak, Kembali</Link>
                </div>
            </div>
        </>
    )
}