import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const Cambodia = () => {
    const cambodia = useLoaderData();
    console.log(cambodia);
    return (
        <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

            {
                cambodia.map(cambodia => <div key={cambodia._id}>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[300px]" src={cambodia.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className="font-bold text-2xl">{cambodia.spotName}</h1>
                            <h2 className="card-title">{cambodia.countryName}</h2>
                            <p className="flex text-xl"><FaLocationDot className="my-auto" /><span className="my-auto">{cambodia.location}</span></p>
                            <p>{cambodia.shortDescription}</p>
                            <div className="flex mb-2">
                                <p >Average Cost: {cambodia.average_cost}</p>
                                <p >Seasonality: {cambodia.seasonality}</p>
                            </div>
                            <Link to={`/cambodia/${cambodia._id}`} className="card-actions  justify-end">
                                <button className="btn w-full font-semibold text-xl btn-primary">View Details</button>
                                
                            </Link>
                        </div>
                    </div>





                </div>)
            }
        </div>
    );
};

export default Cambodia;