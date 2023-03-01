import React from "react";

const Offer = () => {
  const offerBackgroundImage = {
    backgroundImage: `url(${"https://i.ibb.co/G554vJb/ezgif-com-webp-to-jpg-3.jpg"})`,
    minWidth: "100%",
    height: "auto",
    minHeight: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={offerBackgroundImage} className="lg:py-[64px] py-[40px] lg:px-1 px-3">
      <div className="max-w-screen-xl mx-auto ">
        <h2 className="lg:text-4xl text-[28px] font-bold leading-[44px] lg:pb-5 pb-2">
          Duber for Business
        </h2>
        <p className="lg:pb-8 pb-5">
          Transform the way your company moves and feeds its people.
        </p>
        <button className="px-6 py-3 rounded-lg text-white font-medium bg-gray-900 hover:bg-gray-800">
          See how
        </button>
      </div>
    </div>
  );
};

export default Offer;
