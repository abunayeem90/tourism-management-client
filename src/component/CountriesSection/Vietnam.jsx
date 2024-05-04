import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const Vietnam = () => {
    const vietnam = useLoaderData();
    console.log(vietnam);
    return (
        <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

            {
                vietnam.map(vietnam => <div key={vietnam._id}>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[300px]" src={vietnam.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className="font-bold text-2xl">{vietnam.spotName}</h1>
                            <h2 className="card-title">{vietnam.countryName}</h2>
                            <p className="flex text-xl"><FaLocationDot className="my-auto" /><span className="my-auto">{vietnam.location}</span></p>
                            <p>{vietnam.shortDescription}</p>
                            <div className="flex mb-2">
                                <p >Average Cost: {vietnam.average_cost}</p>
                                <p >Seasonality: {vietnam.seasonality}</p>
                            </div>
                            <Link to={`/vietnam/${vietnam._id}`} className="card-actions  justify-end">
                                <button className="btn w-full font-semibold text-xl btn-primary">View Details</button>
                                
                            </Link>
                        </div>
                    </div>





                </div>)
            }
        </div>
    );
};

export default Vietnam;