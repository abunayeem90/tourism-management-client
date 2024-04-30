import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateSpot = () => {
    const {user} = useContext(AuthContext);
    const updateSpot = useLoaderData();
    const {_id, countryName, spotName, image, location, shortDescription, averageCost, seasonality, travelTime, visitors, userName, userEmail  } = updateSpot;

    const handleUpdateSpot = (e) => {
        e.preventDefault();
        const form = e.target;
        const countryName = form.countryName.value;
        const spotName = form.spotName.value;
        const image = form.image.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitors = form.visitors.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const updateInfo = {countryName, spotName, image, location, shortDescription, averageCost, seasonality, travelTime, visitors, userName, userEmail};
        console.log(updateInfo);

        // send data to the server
        fetch(`http://localhost:5000/addSpot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot has been Updateed Successfully',
                    icon: 'success',
                    confirmButtonText: 'cool'
                })
                
            }
        })


    }





    return (
        <div>
            <div className=" mx-60 rounded-2xl border-2">
                <h1 className="flex justify-center items-center font-bold text-3xl my-4">
                    Add Tourist spot
                </h1>

                <div className="mx-10 mb-6">
                    <form onSubmit={handleUpdateSpot}>
                        <div className="flex justify-between gap-6 ">
                            <div className=" w-full">
                                <h1>Country Name</h1>
                                <input type="text"
                                    name="countryName"
                                    defaultValue={countryName}
                                    placeholder="Enter Country Name"
                                    className="input input-bordered w-full" >
                                </input>
                            </div>
                            <div className=" w-full ">
                                <h1>Tourists Spot Name</h1>
                                <input type="text"
                                    name="spotName"
                                    defaultValue={spotName}
                                    placeholder="Enter Spot Name"
                                    className="input input-bordered w-full" >
                                </input>
                            </div>
                        </div>
                        <div className="my-1">
                            <h1>Image URL</h1>
                            <input type="text"
                                name="image"
                                defaultValue={image}
                                placeholder="Enter Image URL"
                                className="input input-bordered w-full" >
                            </input>
                        </div>

                        <div className="flex justify-between gap-6 ">
                            <div className=" w-full">
                                <h1>Location</h1>
                                <input type="text"
                                    name="location"
                                    defaultValue={location}
                                    placeholder="Enter location"
                                    className="input input-bordered w-full" >
                                </input>
                            </div>

                            <div className=" w-full">
                                <h1>Short Description</h1>
                                <input type="text"
                                    name="shortDescription"
                                    defaultValue={shortDescription}
                                    placeholder="Enter Short Description"
                                    className="input input-bordered w-full" >
                                </input>
                            </div>
                        </div>

                        <div className="flex justify-between gap-6">
                            <div className="my-1 w-full">
                                <h1> Average Cost</h1>
                                <input type="text"
                                    name="averageCost"
                                    defaultValue={averageCost}
                                    placeholder="Enter Average Cost"
                                    className="input input-bordered w-full" >
                                </input>
                            </div>

                            <div className="my-1 w-full">
                                <h1> Seasonality</h1>
                                <input type="text"
                                    name="seasonality"
                                    defaultValue={seasonality}
                                    placeholder="Enter Seasonality"
                                    className="input input-bordered w-full" >
                                </input>
                            </div>
                        </div>


                        <div className="flex justify-between gap-6 ">

                            <div className="my-1 w-full">
                                <h1> Travel Time</h1>
                                <input type="text"
                                    name="travelTime"
                                    defaultValue={travelTime}
                                    placeholder="Enter Travel Time"
                                    className="input input-bordered w-full" >
                                </input>
                            </div>

                            <div className="my-1 w-full">
                                <h1> Tota Visitors Per Year</h1>
                                <input type="text"
                                    name="visitors"
                                    defaultValue={visitors}
                                    placeholder="Enter Visitor Number"
                                    className="input input-bordered w-full" >
                                </input>
                            </div>
                        </div>




                        <div className="my-1">
                            <h1> User Name</h1>
                            <input type="text"
                                name="userName"
                                defaultValue={user.displayName}
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full" >
                            </input>
                        </div>
                        <div className="my-1">
                            <h1> User Email</h1>
                            <input type="email"
                                name="userEmail"
                                defaultValue={user.email  || 'Email Not Found'}
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full" >
                            </input>
                        </div>

                        <div className="">
                            <input className="btn w-full text-white text-xl btn-primary" type="submit" value="Add" />
                        </div>



                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateSpot;