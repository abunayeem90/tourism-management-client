import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";


const AllTouristsSpot = () => {
    const loadedData = useLoaderData();
    // const {id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear} = loadedData;
    console.log(loadedData);
    return (
        <div className="mb-10">
            
            <div className="grid  gap-10 ml-10 mr-10 sm:grid-cols-1 lg:grid-cols-3">
            {
                loadedData.map(allTourSpot => <div key={allTourSpot.id} className="card hover:border-2 hover:w-[105%] hover:h-[105%] hover:border-cyan-500 w-full bg-base-100 shadow-xl">
                <figure><img className="relative" src={allTourSpot.image} alt="Shoes" />
                <div className="absolute flex  mt-36 mr-32 font-semibold text-2xl text-white badge-outline">
                <IoLocationOutline className="my-auto" /><span className="my-auto">{allTourSpot.location}</span>
                    </div>
                </figure>
                <div className="card-body ">
                    <h2 className="font-bold text-xl">
                        {allTourSpot.tourists_spot_name}
                        <div className="ml-2 badge badge-secondary">{allTourSpot.country_Name}</div>
                    </h2>
                    <p>{allTourSpot.short_description}</p>
                    <p className="font-semibold text-xl"><span>Average Cost:</span> <span className="text-green-300">{allTourSpot.average_cost}</span></p>
                    <p><span className="font-medium text-xl">Seasonality:</span> {allTourSpot.seasonality}</p>
                    
                    <Link to={`/alltouristspot/touristspot/${allTourSpot.id}`}>
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