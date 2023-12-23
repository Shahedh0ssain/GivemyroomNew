// import { useState } from "react";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from '../../firebase.init';

// const useFirebase = () => {

//   const [user, setUser] = useState({});

//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();



//   // Import the functions you need from the SDKs you need

//   const signInWithGoogle = () => {
//     console.log("clickkk")
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         console.log(user)
//       })
//       .catch(error => {
//         console.error(error);

//       })

//   }

//   // email passwoard oparetion :


//   return {
//     user,
//     signInWithGoogle

//   }


// }
// export default useFirebase;