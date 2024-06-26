import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";


type modelCategory = {
    name : string
}


interface ApiItem {
    id: number;
    name: string;
    buka : string;
    category: modelCategory;
    latitude: number;
    longitude: number;
}

interface typeApiProps {
    api?: ApiItem[];
}

export default function HorizontalListMapView({ api }: typeApiProps) {
    const limitedApi = api ? api.slice(0, 2) : [];

    return (
        <>
            {limitedApi.map((item: ApiItem) => (
                <Link href={`/more/detail/${item.id}`} key={item.id}>
                    <div className="flex items-center shadow-md drop-shadow-md border gap-2.5 h-[120px]">
                        <div className="w-[120px] h-full bg-slate-950 flex justify-center items-center">
                            <FaMapMarkerAlt className="w-16 h-16 text-orange-500" />
                        </div>
                        <div className="flex flex-col gap-2.5 px-4">
                            <h1 className="text-xl font-semibold uppercase mt-4">{item.name}</h1>
                            <div className="mb-4 flex gap-2">
                                <span className="text-orange-500 bg-slate-950 py-1.5 px-4 rounded-full">{item.category.name}</span>
                                <span className="text-orange-500 bg-slate-950 py-1.5 px-4 rounded-full">{item.buka}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}
