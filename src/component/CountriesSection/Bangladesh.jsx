import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const Bangladesh = () => {
   
    const bangladesh = useLoaderData();
    console.log(bangladesh);
    return (
        <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

            {
                bangladesh.map(bangladesh => <div key={bangladesh._id}>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[300px]" src={bangladesh.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className="font-bold text-2xl">{bangladesh.spotName}</h1>
                            <h2 className="card-title">{bangladesh.countryName}</h2>
                            <p className="flex text-xl"><FaLocationDot className="my-auto" /><span className="my-auto">{bangladesh.location}</span></p>
                            <p>{bangladesh.shortDescription}</p>
                            <div className="flex mb-2">
                                <p >Average Cost: {bangladesh.average_cost}</p>
                                <p >Seasonality: {bangladesh.seasonality}</p>
                            </div>
                            <Link to={`/bangladesh/${bangladesh._id}`} className="card-actions  justify-end">
                                <button className="btn w-full font-semibold text-xl btn-primary">View Details</button>
                                
                            </Link>
                        </div>
                    </div>





                </div>)
            }
        </div>
    );
};

export default Bangladesh;