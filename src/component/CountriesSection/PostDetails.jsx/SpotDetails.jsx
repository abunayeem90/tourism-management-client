
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const SpotDetails = () => {
    const details = useLoaderData();
    const {_id, countryName, spotName, image, location, shortDescription, averageCost, seasonality, travelTime, visitors}= details;
    console.log(details);


    return (
        <div key={_id} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-[900px] h-[380px] mr-6 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-4">{countryName}</h1>
                    <h2 className="text-3xl font-bold">Spot Name: {spotName}</h2>
                    <p className="flex text-xl mt-4"><FaLocationDot className="my-auto" /><span className="my-auto">{location}</span></p>
                    <p className="py-2">Short Description: {shortDescription}</p>
                    <div className="flex justify-around">
                    <p className="">Average Cost: {averageCost}</p>
                    <p>Visitors: {visitors}</p>
                    </div>
                    <div className="flex justify-around">
                    <p className="">Seasonality: {seasonality}</p>
                    <p className="mb-4">TravelTime: {travelTime}</p>
                    </div>
                    <Link to={'/malaysia'} className="mr-4">
                    <button className="btn w-32 font-bold text-xl btn-primary">Back </button>
                    
                    </Link>
                    <Link to={'/'}>
                    <button className="btn font-bold text-xl btn-primary">Back To Home</button>

                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;