import  { useContext } from 'react';
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRouters = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname   )
    if(loading){
        return <div className='flex justify-center items-center'>
            <span className=" border-8 border-t-8 text-red-500 border-gray-200 h-20 w-20 loading loading-bars ">
                </span>
                </div>


    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRouters.propTypes = {
    children: PropTypes.object
  };

export default PrivateRouters;