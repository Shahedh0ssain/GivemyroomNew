

import React, { useState } from "react";
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import LocatinBtn from "../LocationBtn/LocationBtn";
import useMap from "../Hooks/useMap";





const Hero = () => {



    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const nolocation = {
        latitude
            :
            23.461888,
        longitude
            :
            91.1638528
    }

    const [islocation, setisLocation] = useState(nolocation);

    // const [isloading, setisLoading] = useState(false);


    // useMap hook
    const { } = useMap(islocation);
    // console.log("Map to use map", location)


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const handleLocationReceived = (location) => {
        // Handle the received location, for example, save it to state or perform any other action
        setisLocation(location);
        navigate("/map");

    };


    // if (isloading) {
    //     console.log("isloading true");
    //     return (
    //         <div className="vh-100">
    //             <p>Loading..</p>
    //         </div>
    //     )
    // }



    // && !isloading

    // if (islocation) {
    //     console.log("islocation true");
    // }

    const BgImg = {
        backgroundImage:
            "url('images/banner.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

    };


    return (

        <section style={BgImg} className="">
            <div className='container'>

                <div className="padding10">
                    <div class="search">
                        <input className="border" type="search" placeholder="CITY, TOWN" />
                        <div class="map d-flex  justify-content-center bg-dark">

                            <LocatinBtn onLocationReceived={handleLocationReceived} >
                            </LocatinBtn>

                        </div>
                    </div>


                    <form className='form z-3 '>
                        <ul className='multi-search-box z-3'>
                            <li>
                                <p className='pe-5'>Check In</p>

                                <div class="input-group date">
                                    {/* <span class="input-group-prepend">
                                         <span class="input-group-text bg-transparent">

                                        </span> 
                                    </span> */}
                                    <input className="form-control bg-transparent font-black " type="date" id="birthday" name="birthday">

                                    </input>
                                    {/* <i class="fa fa-calendar" ></i> */}
                                </div>

                            </li>
                            <li>
                                <p className='pe-5'>Check Out</p>
                                <div class="input-group date">

                                    {/* <span class="input-group-prepend">
                                        <span class="input-group-text bg-transparent">

                                        </span>
                                    </span> */}

                                    <input className="form-control bg-transparent font-black " type="date" id="birthday" name="birthday">

                                    </input>


                                    {/* <input className="form-control bg-transparent" type="text" */}
                                    {/* name="dob" id="dob" placeholder="--/--/--" /> */}
                                </div>
                            </li>
                            <li class="price flex flex-col pe-5">
                                <div>
                                    <p>Price</p>
                                    {/* <button class="btn w-64 rounded-full">Button</button> */}
                                    {/* <button className="btn btn-error">Error</button> */}
                                    <p><input className='bg-transparent' type="number" maxlength="8" placeholder="$5000" /></p>
                                </div>
                            </li>

                            <li onClick={toggleDropdown} class="z-top drop-menu flex items-center">
                                <div className="z-top inline-block text-center">
                                    <div className=' flex'>
                                        <button
                                            type="button"
                                            className="z-3 mt-4 border-0 flex items-center  bg-transparent w-full text-sm font-medium text-gray-700 "
                                            id="options-menu"

                                        >
                                            Guests and Rooms
                                            <img class="btn-img m-2" src="images/05.png" />

                                        </button>
                                    </div>

                                    {isOpen && (
                                        <div className="  p-3  mt-4 w-56  bg-white ">
                                            <div className=" d-flex flex-column">

                                                <div class="  d-flex justify-content-center  justify-content-between mb-2">
                                                    <div class=" position-relative group icon ">
                                                        <img className="" src="images/05.png" />
                                                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    </div>

                                                    <div class="  position-relative group icon ">
                                                        <img src="images/04.png" />
                                                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    </div>

                                                    <div class="  position-relative group icon">
                                                        <img src="images/05.png" />
                                                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    </div>
                                                </div>

                                                <div className='d-flex align-items-center p-2'>
                                                    <img className='pe-2' src="images/adult.png" />
                                                    <div class="btn-minus">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </div>
                                                    <input className='mb-0' type="number" placeholder="0" />
                                                    <div class="btn-plus">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center p-2'>
                                                    <img className='pe-2' src="images/child.png" />
                                                    <div class="btn-minus">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </div>
                                                    <input className='mb-0' type="number" placeholder="0" />
                                                    <div class="btn-plus">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                </div>

                                                <div className='d-flex align-items-center p-2'>
                                                    <img className='pe-2' src="images/05.png" />
                                                    <div class="btn-minus">
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </div>
                                                    <input className='mb-0' type="number" placeholder="0" />
                                                    <div class="btn-plus">
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                </div>

                                                <div className='d-flex justify-content-between py-2'>

                                                    <button class="reset">Reset</button>
                                                    <button class="apply">Apply</button>

                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </li>

                        </ul>
                        {/* <button class="Sbtn btn-submit-search" type="submit">Search</button>  */}
                        <div className="z-n1 btn-submit-search-div">
                            <button class=" z-n1 bg-dark btn-submit-search-btn " type="submit">Search</button>
                        </div>
                    </form>



                    <div class="banner">
                        {/* <img class="col-lg-4" src={img1} alt="My Image" />
                        <img class="col-lg-4" src="images/img2.png" />
                        <img class="col-lg-4" src="images/img3.png" /> */}
                    </div>

                    {/* </div> */}

                </div>
            </div>
        </section >


    );
};

export default Hero;