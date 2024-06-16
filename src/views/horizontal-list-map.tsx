import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

interface ApiItem {
    id: number;
    name: string;
    category_bengkel: string;
    latitude: number;
    longitude: number;
}

interface typeApiProps {
    api?: ApiItem[];
}

export default function HorizontalListMapView({ api }: typeApiProps) {
    return (
        <>
            {
                api && api.map((item: ApiItem, index: number) => (

                    <Link href={`/bengkel/${item.id}`} key={item.id}>
                        <div key={item.id} className="flex items-center shadow-md drop-shadow-md border gap-2.5 h-[120px]">
                            <div className="w-[120px] h-full bg-slate-950 flex justify-center items-center">
                                <FaMapMarkerAlt className="w-16 h-16 text-orange-500" />
                            </div>
                            <div className="flex flex-col gap-2.5 px-4">
                                <h1 className="text-2xl font-semibold uppercase mt-4">{item.name}</h1>
                                <div className="mb-4">
                                    <span className="text-orange-500 bg-slate-950 py-1.5 px-4 rounded-full">{item.category_bengkel}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    );
}
