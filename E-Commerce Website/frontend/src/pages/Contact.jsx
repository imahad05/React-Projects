import React from "react";
import { NewsLetter, Title } from "../components";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title textOne={"contact"} textTwo={"us"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Shop # 45 near SAPSCHOOL <br />
            Ittehad Twon Balidia Town, Karachi
          </p>
          <p className="text-gray-500">
            Tel : (021) 309-2509757 <br /> Email: foreverInfo@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 hover:bg-black hover:text-white text-sm transition-all duration-500">
            Explore jobs
          </button>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Contact;
