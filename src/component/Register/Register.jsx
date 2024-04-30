import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'


const Register = () => {
    const { createUser, setReload, updateUserProfile } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const from = '/';
    

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const user = { email};
        console.log(name, email, photo, password);
        const displayName = name;
        const photoURL = photo;
        setRegisterError('');

        createUser(email, password, displayName, photoURL)
            .then(result => {
                console.log(result.user)

                navigate(from)

                updateUserProfile(name, photo)
                    .then(() => {
                        setReload(true)
                        setRegisterError('');
                        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
                        if (passwordRegex.test(password)) {
                            'Password meets the criteria'
                        } return;
                       
                    })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thank you! Thanks for signing up. Welcome to our community. We are happy to have you on board. Why don’t you follow us on [social media] as well? Air Travel",
                    showConfirmButton: false,
                    timer: 2500
                });

            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
             
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "You Enter wrong",
                    showConfirmButton: false,
                    timer: 2500
                });

            })
             // send data to the server

        fetch('http://localhost:5000/user', {
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

    return (
        <div className="hero min-h-full bg-base-300 rounded-xl mt-2">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center text-green-400 ml-10 lg:text-left">
                    <h1 className="text-5xl  font-bold">Register now!</h1>
                    <p className="py-6">Join our community of homeowners and renters! Register today to receive personalized recommendations, expert advice, and the latest market trends</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name'
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email'
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input name='photo'
                                type="text"
                                placeholder="Enter Your PhotoURL"
                                className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password'
                                type={showPassword ? "Text" : "password"}
                                placeholder="Entet Your Password"
                                className="input input-bordered"
                                required />
                            <span className="absolute text-xl right-10 mt-12" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            {
                                registerError && <p className="text-red-700">{registerError}</p>
                            }

                        </div>
                        <div className="form-control mt-3 mb-2">
                            <button className="btn btn-primary text-2xl">Register</button>

                        </div>
                        <div className='text-2xl font-semibold'>
                            <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                                <Link to={'/login'} className="underline dark:text-gray-800 ml-2">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;