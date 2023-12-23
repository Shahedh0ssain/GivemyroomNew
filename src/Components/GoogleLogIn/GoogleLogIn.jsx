
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogIn = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    }

    
    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.log("error", error);
    }


    return (
        <div className=''>

            {/* <img className="" src="images/gmail-icon.png" alt=""></img> */}
            {/* <button */}
            {/* // onClick={() => signInWithGoogle()}
            className="googlebtn d-flex justify-content-center " */}

            {/* <img className="gimg" src="images/gmail-icon.png" alt="" /> */}
            {/* <span className="px-2">Sign in with GMAIL</span> */}
            {/* </button> */}
            
        </div>
    );
};

export default GoogleLogIn;