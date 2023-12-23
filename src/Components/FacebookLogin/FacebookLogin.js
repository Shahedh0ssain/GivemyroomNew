import React from 'react';

const FacebookLogin = () => {
    return (
        <div className=''>
            {/* <img className="" src="images/gmail-icon.png" alt=""></img> */}
            <button
                // onClick={() => signInWithGoogle()}
                className="googlebtn d-flex justify-content-center "
            >
                {/* <img className="gimg" src="images/Fb-icon.png" alt="" /> */}
                <span className="px-2">Sign in with FACEBOOK</span>
            </button>
        </div>
    );
};

export default FacebookLogin;