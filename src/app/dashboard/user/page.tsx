import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="w-full py-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold uppercase mb-6">data user</h1>
                <Link href={"/"} className="py-2 px-4 bg-slate-900 text-orange-500 font-medium hover:font-bold hover:bg-slate-800 duration-200">Tambah Data User</Link>
            </div>
            <table className="w-full select-none">
                <thead>
                    <tr>
                        <th className="py-2 border uppercase w-[60px]">no</th>
                        <th className="px-4 py-2 border uppercase text-start">username</th>
                        <th className="py-2 border uppercase w-[150px]">aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 border text-center">1</td>
                        <td className="px-4 py-2 border">username</td>
                        <td className="py-2 px-2 border flex justify-center items-center gap-2.5">
                            <Link href={"/"} className="py-2 px-4 bg-orange-500 text-white font-medium hover:font-bold hover:bg-orange-600 duration-200">Edit</Link>
                            <button className="py-2 px-4 bg-red-500 text-white font-medium hover:font-bold hover:bg-red-700 duration-200">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}