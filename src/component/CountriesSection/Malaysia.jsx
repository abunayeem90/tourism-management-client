import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const Malaysia = () => {
    const malaysia = useLoaderData();
  
    console.log(malaysia);
    return (
        <div className="grid mb-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

            {
                malaysia.map(malaysia => <div key={malaysia._id}>


                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[300px]" src={malaysia.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h1 className="font-bold text-2xl">{malaysia.spotName}</h1>
                            <h2 className="card-title">{malaysia.countryName}</h2>
                            <p className="flex text-xl"><FaLocationDot className="my-auto" /><span className="my-auto">{malaysia.location}</span></p>
                            <p>{malaysia.shortDescription}</p>
                            <div className="flex mb-2">
                                <p >Average Cost: {malaysia.average_cost}</p>
                                <p >Seasonality: {malaysia.seasonality}</p>
                            </div>
                            <Link to={`/malaysia/${malaysia._id}`} className="card-actions  justify-end">
                                <button className="btn w-full font-semibold text-xl btn-primary">View Details</button>
                                
                            </Link>
                        </div>
                    </div>





                </div>)
            }
        </div>
    );
};

export default Malaysia;