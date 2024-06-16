import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="w-full py-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold uppercase mb-6">data bengkel</h1>
                <Link href={"/"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Tambah Data Bengkel</Link>
            </div>
            <table className="w-full select-none overflow-x-auto">
                <thead>
                    <tr className="overflow-x-auto">
                        <th className="py-2 border uppercase w-[60px]">no</th>
                        <th className="px-4 py-2 border uppercase text-start w-[250px]">nama</th>
                        <th className="px-4 py-2 border uppercase text-start w-[100px]">alamat</th>
                        <th className="px-4 py-2 border uppercase text-start">buka</th>
                        <th className="px-4 py-2 border uppercase text-start w-[200px]">no telp</th>
                        <th className="px-4 py-2 border uppercase text-start">kordinat</th>
                        <th className="py-2 border uppercase w-[100px]">aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 border text-center">1</td>
                        <td className="px-4 py-2 border">Yamaha Cabang 1</td>
                        <td className="px-4 py-2 border">Jl. Cemara No.242, Tlumpu, Kec. Sukorejo</td>
                        <td className="px-4 py-2 border">
                            senin - jumat pukul 08.00 - 16.00
                        </td>
                        <td className="px-4 py-2 border">
                            0822-3258-9629
                        </td>
                        <td className="px-4 py-2 border">
                            -8.07934299431961, 112.17844952693889
                        </td>
                        <td className="px-4 border">
                            <Link href={"/"} className="py-2 px-4 bg-orange-500 text-white font-medium hover:font-bold hover:bg-orange-600 duration-200">Edit</Link>
                            <button className="py-2 px-4 bg-red-500 text-white font-medium hover:font-bold hover:bg-red-700 duration-200">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}