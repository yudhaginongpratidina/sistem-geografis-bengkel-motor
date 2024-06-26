"use client"
import React, { useState } from "react";
import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { MdLocationOn } from "react-icons/md";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { renderToString } from 'react-dom/server';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';

interface ApiItem {
    latitude: number;
    longitude: number;
    name: string;
}

const markerIcon = (): L.DivIcon => {
    const iconClass = "text-blue-500";
    const iconHtml = renderToString(<MdLocationOn size={30} className={iconClass} />);
    return L.divIcon({
        html: iconHtml,
        iconSize: [30, 30],
        className: 'foo'
    });
};

const MapLeafletFullSize: React.FC<{ api?: ApiItem[] }> = ({ api }) => {
    const [currentPosition, setCurrentPosition] = useState<[number, number]>([-8.096609315101846, 112.16491235543377]);
    const [selectedLayer, setSelectedLayer] = useState<string>("osm");

    const layerOptions: Record<string, { name: string, url: string }> = {
        osm: {
            name: "OpenStreetMap",
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        },
        satellite: {
            name: "Stadia Satellite",
            url: "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png"
        },
        CartoDB_DarkMatter: {
            name: "CartoDB DarkMatter",
            url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        }
    };




    return (
        <div>
            <MapContainer center={currentPosition} zoom={12.5} scrollWheelZoom={false} style={{ width: '100%', height: '100vh' }}>
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked={selectedLayer === "osm"} name="OpenStreetMap">
                        <TileLayer url={layerOptions.osm.url} />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer checked={selectedLayer === "satellite"} name="Stadia Satellite">
                        <TileLayer {...layerOptions.satellite} />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer checked={selectedLayer === "CartoDB_DarkMatter"} name="CartoDB DarkMatter">
                        <TileLayer {...layerOptions.CartoDB_DarkMatter} />
                    </LayersControl.BaseLayer>
                </LayersControl>
                {api?.map((item: ApiItem, index: number) => (
                    <Marker key={index} position={[item.latitude, item.longitude]} icon={markerIcon()}>
                        <Popup>
                            <div className="w-[200px] h-[200px] flex flex-col justify-center items-center">
                                <div className="w-full h-[100px] bg-slate-950 flex justify-center items-center">
                                    <MdLocationOn  className="text-orange-500 h-12 w-12"/>
                                </div>
                                <div className="flex justify-center py-4">
                                    <h1 className="text-lg uppercase">{item.name}</h1>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center  gap-0.5 py-4">
                                    <span className="text-orange-500"> Latitude {item.latitude}</span>
                                    <span className="text-orange-500"> Longitude {item.longitude}</span>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapLeafletFullSize;
