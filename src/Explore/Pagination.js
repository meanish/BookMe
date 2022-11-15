import React, { useEffect, useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { AllVal } from "../Context";
import { useNavigate } from "react-router-dom";
import "../styles/Explore.css";
import Loading from "../Loading"
// Example items, to simulate fetching from another resources.

const PaginatedItems = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const { userData, setUserData } = useContext(AllVal);
  const { setSingleLoading } = userData;
  const { Hotel_info } = userData;

  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(Hotel_info.slice(itemOffset, endOffset));
    console.log(Hotel_info)
    setPageCount(Math.ceil(Hotel_info.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, Hotel_info]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(event);
    const newOffset = (event.selected * itemsPerPage) % Hotel_info.length;
    setItemOffset(newOffset);
  };


  const CallHotel = (Data) => {
    return (
      Navigate("hotelCard", { state: Data })

    )
  }

  // if (setSingleLoading) {
  //   return <div className="page_loading"><Loading /></div>;
  // }
  return (
    <>
      <div>
        <>
          <ReactPaginate
            breakLabel="...."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="page-element"
            previousLinkClassName="page-num"
            pageLinkClassName="page-num2"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />

          {currentItems &&

            Object.values(currentItems).map((Data, id) => {
              const { hotel_name, address, review_score, review_score_word, price_breakdown, hotel_include_breakfast, is_free_cancellable, hotel_id, city, max_photo_url } = Data;
              return (
                <div key={id} className="hotelCard border mb-5 flex gap-2" onClick={() => CallHotel(Data)}>
                  <div className="hotel_img w-80 "><img src={max_photo_url} alt="" className="max-w-100 h-52" /></div>
                  <div className="Hoteldetails font-Anton flex justify-between w-full p-2">
                    <div className="Hotelname leading-2 ">
                      <h1 className="text-3xl font-bold text-theme hover:text-red-800 p-0 m-0">{hotel_name}</h1>
                      <div className="location text-xs hover:underline hover:text-theme">{address},{city}</div>
                      <div className="breakfast pt-3 m-2">{hotel_include_breakfast !== 0 ? (<p className="text-green-700 text-md m-0 font-bold">Breakfast included</p>) : null}</div>
                      <div className="cancel">{is_free_cancellable !== 0 ? (<div className="text-gray-600 text-sm"><p className="p-0 m-0">Free Cancelation . No prepayment needed</p><p className="p-0 m-0">You can cancel later, so lock in this great price today! </p></div>) : null}</div>
                    </div>
                    <div className="Hotelpricerate flex flex-col">
                      <div className="rating flex gap-1 justify-end">
                        <div className="inword text-green-800 text-xl">{review_score_word}</div>
                        <div className="in-number "><p className="p-1 m-0 text-white rounded  bg-theme"> {review_score}</p></div>
                      </div>
                      <div className="price pt-3 text-3xl overflow-hidden">{price_breakdown.all_inclusive_price} <span className="text-sm">{price_breakdown.currency}</span></div>
                      <p className="p-0 m-0 text-sm">Includes taxes and fee</p>
                      <button className="bg-theme px-3 py-2 text-white hover:bg-red-800 text-md mt-5">Pictures </button>
                    </div>
                  </div>

                </div>
              );
            })
          }
        </>
      </div>

    </>
  );
};
export default PaginatedItems;