
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
            });
        }

    }


     






    return (

      
        <div>
            {/* card */}

            
            
        </div>
    );
};

export default MyList;