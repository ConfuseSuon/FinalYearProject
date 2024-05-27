import React from "react";
import { FaCross, FaMinus, FaMinusCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { doPut } from "../../Services/Axios";
import { useProfileConsumer } from "../../Services/useProfile";

const PlaceCard = () => {
  const { user, setRefresh } = useProfileConsumer();
  const handleCancelBook = async (type, id, boid) => {
    try {
      if (type === "car") {
        await doPut("/car/cancelrent", {
          car_id: id,
          booking_id: boid,
        });
        toast.success("Car booking cancelled successfully");
      } else {
        await doPut("/hotel/cancelbooking", {
          room_id: id,
          booking_id: boid,
        });
        toast.success("Hotel booking cancelled successfully");
      }
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error("Cancellation error");
    }
  };
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  return (
    <>
      <div className="m-auto max-w-4xl sm:w-4/12 md:w-6/12 lg:w-8/12">
        <div className="py-4 text-xl">Booking:</div>
        <div className="">
          <div className="flex flex-col gap-4">
            {user &&
              user.carBooking.length > 0 &&
              user.carBooking.map((item) => (
                <div className="cursor relative flex h-32 w-max flex-col items-start justify-center rounded-sm border border-primary bg-blue-200 px-4 py-2 text-primary">
                  <div className="absolute top-[-.75rem] right-[-.75rem] text-red-500">
                    <FaMinusCircle
                      onClick={() =>
                        handleCancelBook("car", item.car_id, item.booking_id)
                      }
                      className="cursor-pointer"
                    />
                  </div>
                  <div>Car Booking</div>
                  <div>Booking id: {item.booking_id}</div>
                  <div>
                    Booked Days:{" "}
                    {item.days.map((el) => (
                      <span className="px-4">{el}</span>
                    ))}
                  </div>
                  <div>Price: {item.cost}</div>
                </div>
              ))}
            {user &&
              user.hotelBooking.length > 0 &&
              user.hotelBooking.map((item) => (
                <div className="cursor relative flex h-32 w-max flex-col items-start justify-center rounded-sm border border-primary bg-red-200 px-4 py-2 text-primary">
                  <div className="absolute top-[-.75rem] right-[-.75rem] text-red-500">
                    <FaMinusCircle
                      onClick={() =>
                        handleCancelBook("hotel", item.room_id, item.booking_id)
                      }
                      className="cursor-pointer"
                    />
                  </div>
                  <div>Hotel Booking</div>
                  <div>Booking id: {item.booking_id}</div>
                  <div>
                    Booked Days:{" "}
                    {item.days.map((el) => (
                      <span className="px-4">{el}</span>
                    ))}
                  </div>
                  <div>Price: {item.cost}</div>
                </div>
              ))}

            {user &&
              user.carBooking.length === 0 &&
              user.hotelBooking.length === 0 && (
                <div className="flex h-32 w-full items-center justify-center rounded-sm border border-primary bg-blue-200">
                  NO Booking available
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
