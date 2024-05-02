
import { Link, useLoaderData } from 'react-router-dom';

const TouristSpot = () => {
    const tourstSpot = useLoaderData();
    // const { id } = useParams();
    // console.log(tourstSpot);
    // console.log( id);
    
    
    return (


        <div key={tourstSpot.id}>
            
                        
            <div className=' mb-4 '>
            <div className="card px-4  lg:card-side bg-base-200 shadow-xl">
                <figure><img className='' src={tourstSpot.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-primary">{tourstSpot.spotName}</h2>
                    <div className='flex gap-28 text-secondary'>
                        <h3 className="card-title">Country: {tourstSpot.countryName}</h3>
                        <h3 className="card-title">Location: {tourstSpot.location}</h3>
                    </div>
                    <p className='w-[600px] text-success text-xl'>{tourstSpot.shortDescription}</p>
                    {/* Table  start*/}
                    <div>


                        <div className="relative mb-4 overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Seasonality
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Travel Time
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white text-lg odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            {tourstSpot.seasonality}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tourstSpot.travelTime}
                                        </td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-left text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                        Average Cost
                                        </th>
                                        <th scope="col" className="px-6 py-3 ">
                                        Total Visitors PerYear
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white text-lg odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            {tourstSpot.averageCost}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tourstSpot.visitors}
                                        </td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                    {/* Table  end*/}
                    <Link to={'/'} className="card-actions mt-4 justify-end">
                        <button className="btn btn-primary ">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
               
            
        </div>


        
    );
};

export default TouristSpot;