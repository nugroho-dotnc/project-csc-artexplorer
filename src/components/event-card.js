import React from "react";

const EventCard = ({
  title,
  description,
  startDate,
  endDate,
  imageUrl,
  onDetailsClick
}) => {
  return (
    <div className="w-full h-full hover:bg-primary bg-secondary hover:text-secondary hover:scale-105 transition-all text-primary flex group">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="px-[20px] pt-[20px] text-[24px]">
          <h1 className="font-bold">{title}</h1>
          {/* <h1 className="opacity-80">{description}</h1> */}
        </div>
        <div className="px-[20px] pb-[20px] flex justify-between">
          <div>
            {/* <h2>{eventType}</h2> */}
            <h2>start date: {startDate}</h2>
            <h2>end date: {endDate}</h2>
            {/* <h2>{year}</h2> */}
          </div>
          <button
            className="w-[65px] h-[65px] bg-primary group-hover:bg-secondary group-hover:text-primary rounded-full flex justify-center items-center text-secondary cursor-pointer text-sm font-medium hover:bg-primary hover:text-secondary hover:border-1 transition-all"
            onClick={onDetailsClick}
          >
            Details
          </button>
        </div>
      </div>
      <div
        className="w-1/2 h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
};

export default EventCard;