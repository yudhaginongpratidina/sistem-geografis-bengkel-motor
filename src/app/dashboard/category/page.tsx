import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="w-full py-6 flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold uppercase">data kategori</h1>
                <Link href={"/dashboard/category/create"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Tambah Data Kategori</Link>
            </div>
            <table className="w-full select-none">
                <thead>
                    <tr>
                        <th className="py-2 border uppercase w-[60px]">no</th>
                        <th className="px-4 py-2 border uppercase text-start">nama</th>
                        <th className="py-2 border uppercase w-[100px]">aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 border text-center">1</td>
                        <td className="px-4 py-2 border">Yamaha</td>
                        <td className="px-4 py-2 border text-center flex justify-center items-center gap-2.5">
                            <Link href={"/dashboard/category/edit/10"} className="py-2 px-7 bg-orange-500 text-white font-medium hover:font-bold hover:bg-orange-600 duration-200">Edit</Link>
                            <Link href={"/dashboard/category/delete/10"} className="py-2 px-7 bg-red-500 text-white font-medium hover:font-bold hover:bg-red-600 duration-200">Hapus</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}