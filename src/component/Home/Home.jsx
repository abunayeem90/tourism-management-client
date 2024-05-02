
import Slider from "../Slider/Slider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Countries from "../Country/Ccountries/Countries";



const Home = () => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://tourism-management-server-blond.vercel.app/addSpot`)
        .then(res => res.json())
        .then(data => {
            setData(data.slice(0, 6));
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
          });
    })
    // console.log(data);

   
    return (
        <div>
            <Slider></Slider>
            {/* Some Touris Spot fo=rom database*/}
            <div className="mt-8">
                <h1 className="flex text-5xl font-bold mb-4 justify-center items-center text-blue-400">
                Tourists Spots Section
                </h1>

                <div className="grid gap-8 my-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {
                    data && 
                    data?.map(item =>  <div key={item._id} className="card w-full bg-base-100 shadow-xl">
                    
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className="font-semibold text-3xl">Country: {item.countryName}</p>
                        <p>{item.spotName}</p>
                        <p className="text-primary">{item.shortDescription}</p>
                        
                        <p>Location: {item.location}</p>
                        <div className="flex ">
                        <p>Seasonality: {item.seasonality}</p>
                        <p className="">Average Cost: {item.averageCost }</p>
                        </div>
                        <div className="flex ">
                        <p >Travel Time: {item.travelTime}</p>
                        <p className="">Visitors: {item.visitors}</p>
                        </div>
                        
                        <Link to={`/touristspot/${item._id}`}>
                    <button className="btn w-full btn-primary mt-2 text-white font-medium text-xl">View Details</button>

                    </Link>
            
            
                    </div>
                </div>)
                }

            </div>

            </div>
            
            
            

            {/* Countries Section */}

            <div className="mx-10 rounded-xl p-6 bg-green-200 mt-10 mb-2">
                <h1 className="flex font-bold text-5xl text-primary justify-center items-center">
                Countries Section
                </h1>
                
            </div>
            
            <div className="mx-10 ">
            <Countries></Countries>
            </div>
            
        </div>
    );
};

export default Home;