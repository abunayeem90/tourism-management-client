import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const { signIn, signinWithGoogle, signinWithGithub } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        const user = {email};
        setLoginError('');
        // setPassword(password);
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error);
                // Check if password meets criteria
                const hasUppercase = /[A-Z]/.test(password);
                const hasLowercase = /[a-z]/.test(password);
                const hasLength = password.length >= 6;

                setIsValid(hasUppercase && hasLowercase && hasLength);
                {isValid ? (
                    <p style={{ color: 'green' }}>Password is valid</p>
                ) : (
                    <p style={{ color: 'red' }}>Password must have at least 6 characters including at least one uppercase and one lowercase letter</p>
                )}
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "You have Enter wrong password",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

              // send data to the server

        fetch('https://tourism-management-server-blond.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                form.reset();
                
            }
        })

    }

    const handleGoogleSignIn = () => {
        signinWithGoogle()
            .then(result => {
                const email = result.user.email;
                const user = {email}
                console.log(result.user)
                console.log(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');

                  // send data to the server

        fetch('https://tourism-management-server-blond.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            
        })
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        signinWithGithub()
            .then(result => {
                const email = result.user.email;
                const user = {email}
                console.log(user);
                console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');

                  // send data to the server

        fetch('https://tourism-management-server-blond.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            
        })
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="mt-4 flex justify-center">
            <div className="w-full max-w-md bg-yellow-300 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-3xl font-bold text-center">Login Now!</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Your Email</label>
                        <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input
                            type={showPassword ? "Text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            required />
                        <div className="ml-[350px]">
                            <span className="absolute text-xl -my-[35px] " onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        {
                            loginError && <p className="text-red-700">{loginError}</p>
                        }
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    
                    <button className="btn btn-secondary block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>

                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">

                    <button onClick={() => handleGoogleSignIn()} className="p-3 rounded-sm">
                        <FaGoogle></FaGoogle>
                    </button>

                    <button onClick={() => handleGithubSignIn()} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub />
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do not have an account?
                    <Link to={'/register'} className="underline dark:text-gray-800 ml-2">Register</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;