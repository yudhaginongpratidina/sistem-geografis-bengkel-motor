import FooterView from "@/views/footer"
import Link from "next/link"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="w-full py-2 bg-white shadow-md drop-shadow-md">
                <div className="container flex justify-between items-center">
                    <Link href={"/dashboard"}>
                        <h1 className="text-2xl font-bold">DASHBOARD</h1>
                    </Link>
                    <button className="py-2 px-4 bg-rose-500 text-white font-semibold">Logout</button>
                </div>
            </nav>
            <div className="container py-6 min-h-screen">
                {children}
            </div>
            <FooterView/>
        </>
    )
} 