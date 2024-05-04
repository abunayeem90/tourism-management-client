import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const Indonesia = () => {
    const indonesia = useLoaderData();
    console.log(indonesia);
    return (
        <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

            {
                indonesia.map(indonesia => <div key={indonesia._id}>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[300px]" src={indonesia.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className="font-bold text-2xl">{indonesia.spotName}</h1>
                            <h2 className="card-title">{indonesia.countryName}</h2>
                            <p className="flex text-xl"><FaLocationDot className="my-auto" /><span className="my-auto">{indonesia.location}</span></p>
                            <p>{indonesia.shortDescription}</p>
                            <div className="flex mb-2">
                                <p >Average Cost: {indonesia.average_cost}</p>
                                <p >Seasonality: {indonesia.seasonality}</p>
                            </div>
                            <Link to={`/indonesia/${indonesia._id}`} className="card-actions  justify-end">
                                <button className="btn w-full font-semibold text-xl btn-primary">View Details</button>
                                
                            </Link>
                        </div>
                    </div>





                </div>)
            }
        </div>
    );
};

export default Indonesia;