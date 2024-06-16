import Link from "next/link"

export default function NavbarView() {
    return (
        <>
            <nav className="w-full bg-white py-2 shadow-md drop-shadow-md">
                <div className="container flex items-center justify-between">
                    <h1 className="text-2xl font-bold">SIG BENGKEL MOTOR</h1>
                    <div className="flex items-center gap-2.5">
                        <Link href={"/"} className="py-2 px-4 bg-orange-500 text-white font-semibold">Dashboard</Link>
                        <Link href={"/"} className="py-2 px-4 bg-orange-500 text-white font-semibold">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}