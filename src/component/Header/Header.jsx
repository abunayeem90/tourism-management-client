import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" );
  const handleToggle = e => {
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme])


  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error);
      })
  }

  const navLinks = <>
    <li><NavLink
      style={({ isActive }) => ({
        color: isActive ? '#fff' : '#545e6f',
        background: isActive ? '#7600dc' : '',
      })}
      to={'/'}>Home</NavLink></li>

        <li><NavLink
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#545e6f',
            background: isActive ? '#7600dc' : '',
          })}
          to={'/alltouristspot'}>All Tourists Spot</NavLink></li>
        

    {
      user ? <li><NavLink
        style={({ isActive }) => ({
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '',
        })}

        to={'/addtouristspot'}>Add Tourists Spot</NavLink></li>
        : <div></div>
    }

    {
      user ? <li><NavLink
        style={({ isActive }) => ({
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '',
        })}

        to={'/mylist'}>My List </NavLink></li>
        : <div></div>
    }

    {
      user ?
        <div></div>
        : <li><NavLink

          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '',
          })}

          to={'/login'}>Login</NavLink></li>
    }

    {
      user ?
        <div></div>
        : <li><NavLink

          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '',
          })}

          to={'/register'}>Register</NavLink></li>
    }

  </>



  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to={'/'} clLinkssName="btn btn-ghost text-xl">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-3xl"><span className="text-primary">Air</span> <span className="text-secondary">Travel</span></h1>
            <img className="h-16 w-16 ml-6 rounded-full" src="https://i.ibb.co/3M3vLmy/Air-Travel.png" alt="" />
          </div>

        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
     
      <div className="navbar-end">
         {/* theme control */}
      <div>
        <label className="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller" />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
      </div>


        {
          user ? <div className="dropdown dropdown-end flex ml-6">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || "https://i.ibb.co/9hb5nyw/Whats-App-Image-2024-03-26-at-20-52-28-f98194be.jpg"} alt="image" />
              </div>

            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-sm btn-ghost">
                  {user?.displayName || "User name not found"}
                </button>
              </li>
              <li>
                <a href="/profile">
                  <button className="btn btn-sm btn-ghost">
                    <span className="ml-10">Profile</span>
                  </button>
                </a>


              </li>
              <li>
                <button onClick={handleSignOut}
                  className="btn btn-sm btn-ghost font-bold">Sign Out</button>
              </li>
            </ul>
          </div>


            :
            <Link to={'/login'}>
              <button className="btn btn-neutral ml-6 px-8 text-white text-xl">Login</button>
            </Link>
        }





      </div>
    </div>
  );
};

export default Header;