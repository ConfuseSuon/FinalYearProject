import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl, doGet } from "../../Services/Axios";
import CommonCard from "../../components/CommonCar";
import Card from "../HomePage/Card";
import OfferCard from "../HomePage/OfferCard";

const LocalOffer = () => {
  const [hotelWithOffers, setHotelsWithOffer] = useState([]);
  const handleGetOfferHotels = async () => {
    try {
      const response = await doGet("/hotel/readlimitedofferhotels");

      setHotelsWithOffer(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    handleGetOfferHotels();
  }, []);
  return (
    <div className="h-screen w-screen bg-slate-300">
      <div className="flex items-center justify-center py-6 text-3xl">
        Local Offers
      </div>
      <div className="flex flex-wrap justify-evenly">
        {hotelWithOffers.map((item) => (
          <Link to={`/hoteldescription/${item.hotel_id}`}>
            <CommonCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LocalOffer;
