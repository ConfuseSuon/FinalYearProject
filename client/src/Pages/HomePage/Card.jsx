import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Services/Axios";
import CommonCard from "../../components/CommonCar";
import CsCard from "../../components/CsCard";

const Card = ({ item }) => {
  return (
    <>
      <Link to={`/hoteldescription/${item.hotel_id}`}>
        <div className="cursor-pointer rounded-lg bg-[#F5F5F5] shadow-md hover:bg-slate-500 hover:bg-opacity-50">
          <CommonCard item={item} />
        </div>
      </Link>
    </>
  );
};

export default Card;
