import FooterView from "@/views/footer"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="w-full py-2 bg-white shadow-md drop-shadow-md">
                <div className="container flex justify-between items-center">
                    <h1>DASHBOARD</h1>
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