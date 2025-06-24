import React from "react";
import CormPict from "../img/confirmedPict.png";
import { useNavigate } from "react-router-dom";

function ConfirmedPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/shop");
  };

  return (
    <div className="flex flex-col justify-around gap-9 items-center 1xl:m-28 xl:m-10">
      <div className="flex gap-2 items-center">
        <div className="text-main-army font-bold text-3xl text-center">
          CONFIRMED
        </div>
        <i className="fa-solid fa-circle-check text-main-army fa-2xl"></i>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-bold text-xl text-center">
          THANK YOU FOR YOUR ORDER
        </h2>
        <h2 className="text-black font-bold text-xl text-center">
          Order Id: 171419
        </h2>
      </div>
      <div>
        <img src={CormPict} alt="" />
      </div>
      <div className="flex flex-col gap-2 text-black font-2xl font-bold text-center">
        <h3>Estimated delivery</h3>
        <h3>Wednesday, 14th May 2025</h3>
      </div>
      <button
        className="rounded-3xl bg-main-yellow w-56 1xl:h-12 xl:h-10 font-semibold ml-2 xl:my-1"
        onClick={handleBack}
      >
        Back Shopping
      </button>
    </div>
  );
}

export default ConfirmedPage;
