import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="w-full h-[200px] grid grid-cols-3 gap-4">
                <div className="w-full shadow-md drop-shadow-md">
                    <div className="w-full h-[125px] bg-black flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-white">1</h1>
                    </div>
                    <div className="flex flex-col justify-center h-[75px] px-4">
                        <h1 className="text-xl font-medium uppercase">User</h1>
                        <Link href={"/dashboard/user"} className="text-orange-500 hover:underline hover:underline-offset-4">Lihat Selengkapnya</Link>
                    </div>
                </div>
                <div className="w-full shadow-md drop-shadow-md">
                    <div className="w-full h-[125px] bg-black flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-white">1</h1>
                    </div>
                    <div className="flex flex-col justify-center h-[75px] px-4">
                        <h1 className="text-xl font-medium uppercase">Kategori Bengkel</h1>
                        <Link href={"/dashboard/category"} className="text-orange-500 hover:underline hover:underline-offset-4">Lihat Selengkapnya</Link>
                    </div>
                </div>
                <div className="w-full shadow-md drop-shadow-md">
                    <div className="w-full h-[125px] bg-black flex justify-center items-center">
                        <h1 className="text-5xl font-bold text-white">1</h1>
                    </div>
                    <div className="flex flex-col justify-center h-[75px] px-4">
                        <h1 className="text-xl font-medium uppercase">Bengkel</h1>
                        <Link href={"/dashboard/bengkel"} className="text-orange-500 hover:underline hover:underline-offset-4">Lihat Selengkapnya</Link>
                    </div>
                </div>
            </div>
            <div className="w-full py-6">
                <h1 className="text-3xl font-bold uppercase mb-6">aktivitas terakhir</h1>
                <div className="w-full border h-[400px]">

                </div>
            </div>
        </>
    )
}