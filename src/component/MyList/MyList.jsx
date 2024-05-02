
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";



const MyList = () => {
    // const addSpot = useLoaderData();
    

    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const[spot , setSpot] = useState(userData);
   


    useEffect(() => {
        
        // Fetch user data when the component mounts
        if(user?.email){
            fetch(`https://tourism-management-server-blond.vercel.app/addSpot-email/${user?.email}`)
           
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data); 
                setUserData(data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
              });
        }
          
      }, [user]);
      console.log("UserData:", userData);

   
      const hanldeDelete = _id => {
        console.log('hello',_id);
        if(_id){

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
    
                    fetch(`https://tourism-management-server-blond.vercel.app/addSpot/${_id}`,{
                        method: 'DELETE'
    
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Coffee has been deleted.",
                                    icon: "success"
                                  });
    
                                  const remaining = spot.filter(item  => item._id !== _id);
                                  setSpot(remaining);
                                  
                            
                            }
                        })
                }

                // delete country
            });
        }

    }


     






    return (

      
        <div>
            {/* card */}
             <div className="grid gap-8 my-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                
                {
                    userData && 

                    userData?.map(item =>  <div key={item._id} className="card w-full bg-base-100 shadow-xl">
                    
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
                     <div className="flex mr-6 gap-8 justify-between">
                        <Link 
                        to={`update/${item._id}`}
                        >
                        <button className="btn text-xl font-medium bg-secondary" type="button">Update</button>
                        </Link>
                        <Link>
                        <button onClick={() =>  {hanldeDelete(item._id)} } className="btn text-xl font-medium  bg-primary" type="button">Delete</button>
                        </Link>
                     </div>
                    
                     
                     
                     {/* <p>{item.userName}</p>
                     <p>{item.userEmail}</p> */}
         
         
                 </div>
             </div>)
                }
            </div>

            
            
            
        </div>
    );
};

export default MyList;