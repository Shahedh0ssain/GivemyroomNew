
import React, { useEffect } from 'react';
// import GoogleLogIn from '../../GoogleLogIn/GoogleLogIn';
import './Login.css'
// import './Login.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import app from "../../../../firebase.init";
import { getAuth } from "firebase/auth";
// import FacebookLogin from '../../FacebookLogin/FacebookLogin';
import useMap from '../../Hooks/useMap';
// import mapComponent from '../../mapComponent/mapComponent';

const Login = () => {



    const auth = getAuth(app);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    
    // useMap hook

    const { myLocation } = useMap();
    // let islocation = true;



    useEffect(() => {

        // Create a new map instance
        if (window.google && window.google.maps) {
            // Create a new map instance
            // setisLoading(true);
            if (myLocation) {
                const map = new window.google.maps.Map(document.getElementById('map'), {
                    // center: { lat: -34.397, lng: 150.644 },
                    center: { lat: myLocation.latitude, lng: myLocation.longitude },
                    zoom: 10,
                });

                // Optionally, you can add markers, polygons, etc.

                const marker = new window.google.maps.Marker({
                    // position: { lat: -34.397, lng: 150.644 },
                    position: { lat: myLocation.latitude, lng: myLocation.longitude },
                    map: map,
                    title: 'Hello World!',
                });
                marker.setMap(map);
                // setisLoading(false);
            } else {
                console.log("islocation error", myLocation);
                // setisLoading(false);
            }
        } else {
            console.error('Google Maps API not loaded.');
            // setisLoading(false);
        }
    }, [myLocation]);



    // const [signInWithGoogle, user, error] = useSignInWithGoogle(auth)
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    if (user) {
        navigate(from, { replace: true });

    }
    if (loading) {
        console.log("loading");
    }
    if (error) {
        console.log("error", error);
    }

    // const {signInWithGoogle}= useFirebase();
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // console.log("LOGIN", data);
        const { Email, Password } = data;
        signInWithEmailAndPassword(Email, Password)
        reset();
    }



    return (

        <section className=''>
            <div className='container'>

                <div className="roww">

                    <div className='d-flex  justify-content-center map-container my-5 '>

                        <div className='p-5   rounded-full ' id="map" style={{ width: '400px', height: '350px',borderRadius: "15px" }}>
                            {/* map rander here */}
                        </div>


                    </div>



                    {/* //from start */}
                    <div className='full-form '>
                        <div>
                            <form style={{borderRadius: "15px",zIndex:"1" }}   onSubmit={handleSubmit(onSubmit)} className="reg-form">

                                <h2>Log in and send your offer</h2>
                                {/* {...register("Email", { required: "Email Address is required" })} */}

                                {/* <input  class="dotted" type="text" maxlength="15" name="Username" placeholder="username" /> */}
                                <input class="dotted" type="Email" maxlength="40" name="Email" placeholder="Email"
                                    {...register("Email", { required: "Email Address is required" })}
                                    aria-invalid={errors.Email ? "true" : "false"}
                                />

                                {/* //password */}
                                <input class="dotted" type="Password" maxlength="20" name="Password" placeholder="Password"
                                    {...register("Password", { required: "Password  is required" })}
                                    aria-invalid={errors.Email ? "true" : "false"}
                                />


                                <input class="login" type="submit" value="Login" />
                                <Link to="/register">Not Registered? Create New Account</Link>


                            </form>
                        </div>
                        <div>
                            {/* <GoogleLogIn></GoogleLogIn>
                            <FacebookLogin></FacebookLogin> */}

                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Login;