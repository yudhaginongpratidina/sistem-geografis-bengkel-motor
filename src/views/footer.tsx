import { FaMapLocationDot } from "react-icons/fa6";

export default function FooterView() {
    return (
        <>
            <footer className="w-full">
                {/* NAVIGATION */}
                <div className="bg-slate-950 py-6 flex items-center">
                    <div className="container flex items-center justify-between">
                        <div className="flex flex-col items-center">
                            <FaMapLocationDot className="h-32 w-32 text-white" />
                            <h1 className="text-2xl font-bold text-white">SIG BENGKEL MOTOR </h1>
                        </div>
                        <div className="w-full max-w-screen-md text-center">
                            <h1 className="text-2xl font-bold text-white">SIG BENGKEL MOTOR</h1>
                            <p className="text-white">
                                deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi,
                                deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi,
                                deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi, deskripsi aplikasi,
                            </p>
                        </div>
                    </div>
                </div>

                {/* APPLICATION NAME */}
                <div className="bg-orange-500 h-10 flex items-center">
                    <div className="container flex justify-between">
                        <span className="text-white">2024 - Kelompok SIG</span>
                    </div>
                </div>
            </footer>
        </>
    )
}