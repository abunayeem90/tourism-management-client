import  { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';

const Profile = () => {
    const {user } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile</title>
                
            </Helmet>
          
            <div className="max-w-lg mx-auto mb-10">
      <div className="bg-base-200 shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className=" animate__animated animate__lightSpeedInLeft font-bold text-xl mb-2">User Profile</div>
          <p className="animate__animated animate__zoomIn text-gray-700 text-base">Here is your profile information:</p>
          <div className='mt-6 mb-6 flex justify-center items-center'>
                <img className='animate__animated animate__zoomIn w-56 h-56 rounded-full' src={user.photoURL} alt="" />
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <div className="w-1/3 text-gray-700">Username:</div>
              <div className="animate__animated animate__slideInRight w-2/3 font-semibold">{user.displayName}</div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-1/3 text-gray-700">Email:</div>
              <div className="animate__animated animate__slideInRight w-2/3 font-semibold">{user.email || "Email not found"}</div>
            </div>
            {/* Add more profile information here as needed */}
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
          <button className="animate__animated animate__zoomIn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
           
        </div>
    );
};

export default Profile;