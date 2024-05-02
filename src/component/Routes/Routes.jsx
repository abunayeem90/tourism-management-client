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
import About from '../About/About';
import Contact from '../About/Contact/Contact';
import Countries from '../Country/Ccountries/Countries';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('https://abunayeem90.github.io/tourism/tourism.json'),


      },
      {
        path: '/',
        element: <Country></Country>,
        loader: () => fetch(`https://abunayeem90.github.io/tourism/tourism.json`)
      },
      {
        path: '/alltouristspot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://tourism-management-server-blond.vercel.app/addSpot')
      },
      {
        path: '/touristspot/:id',
        element: <PrivateRouters>
          <TouristSpot></TouristSpot>
        </PrivateRouters>,
        loader: ({ params }) => fetch(`https://tourism-management-server-blond.vercel.app/addSpot/${params.id}`)
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
        
      },
      {
        path: '/mylist/update/:id',
        element: <PrivateRouters>
          <UpdateSpot></UpdateSpot>
        </PrivateRouters>,
          
        loader: ({ params }) => fetch(`https://tourism-management-server-blond.vercel.app/addSpot/${params.id}`)

      },
      {
        path: '/countries',
        element: <Countries></Countries>,
        // loader: () => fetch('https://tourism-management-server-blond.vercel.app/countries')
        
        
      },
      {
        path: '/profile',
        element: <PrivateRouters>
          <Profile></Profile>
        </PrivateRouters>
      },
      {
        path: '/aboutus',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
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