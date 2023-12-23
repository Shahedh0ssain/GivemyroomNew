import React from "react";
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import app from "../../../firebase.init";
import { getAuth } from "firebase/auth";

const Sidebar = ({ isOpen, onCloseSidebar }) => {


    const auth = getAuth(app);
    const [user, Aloading] = useAuthState(auth);

    const [signOut, loading, error] = useSignOut(auth);

    if (user) {
        // console.log("user", user);
    }

    if (error) {
        console.log("error", error)
    }
    if (loading || Aloading) {
        console.log("loading")
    }

    let logout = async () => {
        console.log("click")
        const success = await signOut();
        console.log("", success)
    }

    const navLink = [

        <li><Link to="/">Home</Link></li>,

        user ?

            <>

                <li><Link to="/map">hotels</Link></li>,
                <li className="">
                    <button

                        className='ms-4 btn btn-danger '
                        onClick={() => logout()}
                    >Logout</button>
                </li>


            </>
            :
            <>

                <li ><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                {/* <li><Link to="/map">Map</Link></li> */}
            </>

    ]
    return (

        <section id="header_menu">
            <div id="mySidebar" className={`sidebar2 ${isOpen ? 'open' : ''}`}>
                <i className="close-btn fa fa-close" onClick={() => { onCloseSidebar(); }}></i>
                <ul class="menu">

                    {navLink}
                    {/* <li ><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li> */}

                </ul>
            </div>
        </section>


    );
};

export default Sidebar;