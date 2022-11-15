import React, { useContext } from 'react';
import { AllVal } from "../Context";
import Navbar from "../PageBook/Navbar"
import "../index.css";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Footer from "../Footer";
import Loading from "../Loading"
const Explore = () => {
  const { userData } = useContext(AllVal);
  const { Hotel_info, setLoading } = userData;
  const Navigate = useNavigate();
  console.log("loadME", setLoading)


  if (setLoading) {
    return <div className="page_loading"><Loading /></div>;
  }

  return (
    <>
      <div className=" nav-bar home-page ">
        <Navbar />
      </div>

     
      {Hotel_info ? (
        <>
          <h1 className="text-center my-5 text-theme">List of hotel available for your Visit</h1>
          <p className="container text-xl">Total available Hotels:<span className="text-red-800 text-2xl font-bold">{Hotel_info.length}</span></p>
        </>) : null}


      <div className="Hotel mx-auto ">

        {/* <div className="filter_hotel w-1/4  border border-red-500 text-black text-center font-extrabold text-xl">Filteration Soon</div> */}
        {/* <div className="Your_value w-1/5 absolute right-0  h-32 text-xl flex flex-col justify-center  border rounded bg-red-800 text-white">
          <p className="p-0 m-0 ">Location:{userData.location}</p>
          <p className="p-0 m-0">From:{userData.visitDate}</p>
          <p className="p-0 m-0">To:{userData.returnDate}</p>
        </div> */}


        <div className="hotel_brief rounded mx-52 text-center">
          {
            Hotel_info ? (

              <Pagination />
            ) : (<div className="h-96 mt-5">
              <h1 className="my-8">OOPS...................</h1>
              <p className="text-2xl my-4">Your needs are not being met by any hotels. Please provide the right information or adjust the destination.</p>
              <button onClick={() => Navigate("/BookMe")} className="bg-theme px-5 py-3 text-white text-3xl">Return Home</button>
            </div>)
          }
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>

    </>
  )

}




export default Explore

// // const Value = Object.values(userData.Hotel_info);

// // return (
//   // <>
//     // {/* {Value.map((Data, id) => {
//         const { hotel_name, hotel_id, city, max_photo_url } = Data;

//         return (
//           <p key={id}>
//             {hotel_name}
//             {hotel_id}
//             <img src={max_photo_url} alt="" />
//           </p>
//         );
//       })} */}
//   // </>
// );