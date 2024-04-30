import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';
import NotFound from '../NotFound/NotFound';
import Home from '../Home/Home';
import AllTouristsSpot from '../AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from '../AddTouristsSpot/AddTouristsSpot';
import MyList from '../MyList/MyList';
import Login from '../Login/Login';
import Register from '../Register/Register';
import TouristSpot from '../AllTouristsSpot/TouristSpot';
import Country from '../Country/Country';
import PrivateRouters from './PrivateRouters';
import Profile from '../Profile/Profile';
import UpdateSpot from '../MyList/UpdateSpot';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://abunayeem90.github.io/tourism/tourism.json')
          
        },
        {
          path: '/',
          element: <Country></Country>,
          loader: () => fetch(`https://abunayeem90.github.io/tourism/tourism.json`)
        },
        {
          path: '/alltouristspot',
          element: <AllTouristsSpot></AllTouristsSpot>,
          loader: () => fetch('https://abunayeem90.github.io/tourism/tourism.json')
        },
        {
          path: '/alltouristspot/touristspot/:id',
          element: <TouristSpot></TouristSpot>,
          loader: ({params}) => fetch(`https://abunayeem90.github.io/tourism/tourism.json?id=${params.id}`)
        },
        {
          path: '/addtouristspot',
          element: <PrivateRouters>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRouters>
        },
        {
          path: '/mylist',
          element: <PrivateRouters>
            <MyList></MyList>
          </PrivateRouters>,
          loader: () => fetch(`http://localhost:5000/addSpot`)
        },
        {
          path: '/mylist/update/:id',
          element:
            <UpdateSpot></UpdateSpot>,
          loader: ({params}) => fetch(`http://localhost:5000/addSpot/${params.id}`)

        },
        {
          path: '/profile',
          element: <PrivateRouters>
              <Profile></Profile>
          </PrivateRouters>
      },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    },
  ]);


  export default router;