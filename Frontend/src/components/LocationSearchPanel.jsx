import React from "react";
import mapPin from "../assets/map-pin-fill.png"; 
const LocationSearchPanel = () => {
    // Sample array for locations
    const locations = [
        "Ecovillage 4, Greater Noida, Uttar Pradesh",
        "Ecovillage 3, Greater Noida, Uttar Pradesh",
        "Ecovillage 2, Greater Noida, Uttar Pradesh",
        "Ecovillage 1, Greater Noida, Uttar Pradesh",
    ];

    return (
        <div>
            {/* This is just sample data */}
            {locations.map((elem, index) => (
                <div 
                    key={index} // ✅ Adding key to prevent React warning
                    className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 items-center justify-start"
                >
                    <h2 className="bg-[#eee] h-10 w-10 p-2 rounded-full flex items-center justify-center">
                        <img src={mapPin} alt="Location Icon" className="w-6 h-6" />
                    </h2>
                    <h4 className="font-medium">{elem}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;
