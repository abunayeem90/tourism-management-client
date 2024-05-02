import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";


const AllTouristsSpot = () => {
    const loadedData = useLoaderData();
    const [sortOrder, setSortOrder] = useState("asc");
    // const {id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear} = loadedData;
    console.log(loadedData);

    const sortByAverageCost = () => {
        const sortedData = [...loadedData].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.averageCost - b.averageCost;
            } else {
                return b.averageCost - a.averageCost;
            }
        });
        return sortedData;
    };


    return (
        <div className="mb-10">
            {/* Dropdown menu */}
            <div className="my-5 text-2xl flex justify-center">
                <h1 className="font-bold mr-2">Sort by Average <span className="text-red-500">Cost</span> :</h1>
                <select className="border-2 border-yellow-200" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="asc">Low to high Budget</option>
                    <option value="desc">High to low Budget</option>
                </select>
            </div>


            {/* All data user added in the databse */}
            <div className="grid  gap-10 ml-10 mr-10 sm:grid-cols-1 lg:grid-cols-3">
            {
                sortByAverageCost().map(allTourSpot => <div key={allTourSpot.id} className="card hover:border-2 hover:w-[105%] hover:h-[105%] hover:border-cyan-500 w-full bg-base-100 shadow-xl">
                <figure><img className="relative" src={allTourSpot.image} alt="Shoes" />
                <div className="absolute flex  mt-36 mr-32 font-semibold text-2xl text-white badge-outline">
                <IoLocationOutline className="my-auto" /><span className="my-auto">{allTourSpot.location}</span>
                    </div>
                </figure>
                <div className="card-body ">
                    <h2 className="font-bold text-xl">
                        {allTourSpot.spotName}
                        <div className="ml-2 badge badge-secondary">{allTourSpot.countryName}</div>
                    </h2>
                    <p>{allTourSpot.short_description}</p>
                    <p className="font-semibold text-xl"><span>Average Cost:</span> <span className="text-green-300">{allTourSpot.averageCost}</span></p>
                    <p className="font-semibold text-xl"><span>Total Visitor Per Year:</span> <span className="text-green-300">{allTourSpot.visitors}</span></p>
                    <p className="font-semibold text-xl"><span>Travel Time:</span> <span className="text-green-300">{allTourSpot.travelTime}</span></p>
                    <p><span className="font-medium text-xl">Seasonality:</span> {allTourSpot.seasonality}</p>
                    
                    <Link to={`/touristspot/${allTourSpot._id}`}>
                    <button className="btn w-full btn-primary mt-2 text-white font-medium text-xl">View Details</button>

                    </Link>
                </div>
            </div>)
            }
           
        </div>
           
            </div>
    );
};

export default AllTouristsSpot;