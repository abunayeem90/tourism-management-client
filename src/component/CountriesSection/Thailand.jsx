import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const Thailand = () => {
    const thailand = useLoaderData();
    console.log(thailand);
    return (
        <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

            {
                thailand.map(thailand => <div key={thailand._id}>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[300px]" src={thailand.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className="font-bold text-2xl">{thailand.spotName}</h1>
                            <h2 className="card-title">{thailand.countryName}</h2>
                            <p className="flex text-xl"><FaLocationDot className="my-auto" /><span className="my-auto">{thailand.location}</span></p>
                            <p>{thailand.shortDescription}</p>
                            <div className="flex mb-2">
                                <p >Average Cost: {thailand.average_cost}</p>
                                <p >Seasonality: {thailand.seasonality}</p>
                            </div>
                            <Link to={`/thailand/${thailand._id}`} className="card-actions  justify-end">
                                <button className="btn w-full font-semibold text-xl btn-primary">View Details</button>
                                
                            </Link>
                        </div>
                    </div>





                </div>)
            }
        </div>
    );
};

export default Thailand;