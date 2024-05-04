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
import PrivateRouters from './PrivateRouters';
import Profile from '../Profile/Profile';
import UpdateSpot from '../MyList/UpdateSpot';
import About from '../About/About';
import Bangladesh from '../CountriesSection/Bangladesh';
import SpotDetails from '../CountriesSection/PostDetails.jsx/SpotDetails';
import Thailand from '../CountriesSection/Thailand';
import Malaysia from '../CountriesSection/Malaysia';
import Indonesia from '../CountriesSection/Indonesia'
import Vietnam from '../CountriesSection/Vietnam'
import Cambodia from '../CountriesSection/Cambodia'
import Contact from '../Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: '/bangladesh',
        element: <Bangladesh></Bangladesh>,
        loader: () => fetch('https://tourism-management-server-blond.vercel.app/countries/Bangladesh')
      },
      {
        path: '/bangladesh/:id',
        element: <SpotDetails />,
        loader: ({params}) => fetch(`https://tourism-management-server-blond.vercel.app/countries/Bangladesh/${params.id}`)
      },
      
      {
        path: '/thailand',
        element: <Thailand></Thailand>,
        loader: () => fetch('https://tourism-management-server-blond.vercel.app/countries/Thailand')
      },
      {
        path: '/thailand/:id',
        element: <SpotDetails />,
        loader: ({params}) => fetch(`https://tourism-management-server-blond.vercel.app/countries/Thailand/${params.id}`)
      },
      {
        path: '/indonesia',
        element: <Indonesia></Indonesia>,
        loader: () => fetch('https://tourism-management-server-blond.vercel.app/countries/Indonesia')
      },
      {
        path: '/indonesia/:id',
        element: <SpotDetails />,
        loader: ({params}) => fetch(`https://tourism-management-server-blond.vercel.app/countries/Indonesia/${params.id}`)
      },
      {
        path: '/malaysia',
        element: <Malaysia></Malaysia>,
        loader: () => fetch('https://tourism-management-server-blond.vercel.app/countries/Malaysia')
      },
      {
        path: '/Malaysia/:id',
        element: <SpotDetails />,
        loader: ({params}) => fetch(`https://tourism-management-server-blond.vercel.app/countries/Malaysia/${params.id}`)
      },
     
      {
        path: '/vietnam',
        element: <Vietnam></Vietnam>,
        loader: () => fetch('https://tourism-management-server-blond.vercel.app/countries/Vietnam')
      },
      {
        path: '/vietnam/:id',
        element: <SpotDetails />,
        loader: ({params}) => fetch(`https://tourism-management-server-blond.vercel.app/countries/Vietnam/${params.id}`)
      },
      {
        path: '/cambodia',
        element: <Cambodia></Cambodia>,
        loader: () => fetch('https://tourism-management-server-blond.vercel.app/countries/Cambodia')
      },
      {
        path: '/cambodia/:id',
        element: <SpotDetails />,
        loader: ({params}) => fetch(`https://tourism-management-server-blond.vercel.app/countries/Cambodia/${params.id}`)
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