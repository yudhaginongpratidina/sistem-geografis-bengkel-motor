"use client"
import { useState, useEffect } from "react";
import NavbarView from "@/views/navbar";
import MapLeaflet from "@/components/map-leafleat"

export default function Page({ params }: { params: { id: number } }) {
    // Define types for workshop and category models
    type modelBengkel = {
        id: number;
        name: string;
        latitude: number;
        longitude: number;
        categoryId: number;
        alamat: string;
        buka: string;
        telp: string;
    };

    type modelCategory = {
        id: number;
        name: string;
    };

    // State variables
    const [workshop, setWorkshop] = useState<modelBengkel | null>(null);
    const [categories, setCategories] = useState<modelCategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch workshop data by ID
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true before fetching data
            try {
                // Fetch workshop details
                const response = await fetch(`http://localhost:3000/api/bengkel?id=${params.id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch workshop data");
                }
                const { data } = await response.json();
                const workshopData: modelBengkel = data[0];

                if (workshopData) {
                    setWorkshop(workshopData);

                    // Fetch categories
                    const categoryResponse = await fetch("http://localhost:3000/api/category");
                    if (!categoryResponse.ok) {
                        throw new Error("Failed to fetch categories");
                    }
                    const { data: categoryData } = await categoryResponse.json();
                    setCategories(categoryData);

                    setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); 
            }
        };

        fetchData();
    }, [params.id]);

    // Prepare props for MapLeaflet component
    const mapApiProps = workshop
        ? [
              {
                  name: workshop.name,
                  latitude: workshop.latitude,
                  longitude: workshop.longitude,
              },
          ]
        : [];

    return (
        <>
            <NavbarView />
            <div className="w-full min-h-screen bg-gray-300">
                <div className="w-full min-h-screen container bg-white h-[400px] shadow-md pt-14">
                    {loading ? (
                        <p className="text-center mt-4">Loading...</p>
                    ) : (
                        <>
                            <MapLeaflet api={mapApiProps} />
                            <div className="w-full py-6 flex flex-col gap-2">
                                <h1 className="text-4xl uppercase text-center">{workshop?.name}</h1>
                                <h2 className="text-center text-2xl">
                                    Bengkel{" "}
                                    {categories.find((cat) => cat.id === workshop?.categoryId)?.name}
                                </h2>
                                <p className="text-center">{workshop?.alamat}</p>
                                <p className="text-center">Jam buka: {workshop?.buka}</p>
                                <p className="text-center">Telepon: {workshop?.telp}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
