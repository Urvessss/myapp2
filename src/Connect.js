// import React from "react";
// import LoginFrom from "./components/LoginForm";
// import RegisterFrom from "./components/RegisterForm";
// import Movies from "./components/Movies";
// import { ToastContainer } from "react-toastify";
// import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import { useEffect, useState } from "react";

// import MovieForm from "./components/MovieForm";
// import Navbar from "./components/Navbar";

// const Connect = (token) => {
//   let [loginStatus, setLoginStatus] = useState();

//   useEffect(() => {
//     setLoginStatus(localStorage.setItem("token", token));
//   }, []);

//   if (loginStatus) {
//     return (
//       <div className="container">
//         <ToastContainer />
//         <div className="row">
//           <div className="col-12">
//             <Navbar />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/register" element={<RegisterFrom />} />
//               <Route path="/login" element={<LoginFrom />} />
//               <Route path="/movies" element={<Movies />} />
//               <Route path="/movies/:new" element={<MovieForm />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="container">
//         <ToastContainer />
//         <div className="row">
//           <div className="col-12">
//             <Navbar />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/register" element={<RegisterFrom />} />
//               <Route path="/login" element={<LoginFrom />} />
//               <Route path="/movies" element={<Movies />} />
//               <Route path="/movies/:new" element={<MovieForm />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

// export default Connect;
