import Image from "next/image";
import React from "react";
import { CheckBox } from "./CheckBox";
import { useState } from "react";
import { SpecificationBox } from "./SpecificationBox";

export const CheckoutPage = () => {
  return (
    <div className="md:w-[85%] mx-auto w-full h-full px-2 py-2 border flex  gap-5">
      <div className="md:w-[80%] w-full h-full border border-red-500">
        <h1 className="md:text-[45px] text-green-900">
          HAY Orange and white chairs
        </h1>
        <div className="md:flex mt-5 border-b-2 pb-5 gap-4">
          <div className="md:w-[485px]  w-[100%]  cursor-pointer h-[550px] relative rounded-sm">
            <Image
              src="https://www.relievefurniture.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frelieve-image-cloud-store%2Fimage%2Fupload%2Fv1695143809%2Fitem-images%2F6ea064a7-e924-4c31-9e2a-5667f1339e3b.jpg&w=828&q=75"
              alt="product-img"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="w-[265px] md:block hidden cursor-pointer h-[310px] relative rounded-sm">
            <Image
              src="https://www.relievefurniture.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frelieve-image-cloud-store%2Fimage%2Fupload%2Fv1695143809%2Fitem-images%2F63205f78-d2a7-4f55-b3ea-d9841a62e2e4.jpg&w=828&q=75"
              alt="img"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="w-[265px] md:block hidden cursor-pointer h-[310px] relative rounded-sm">
            <Image
              src="https://www.relievefurniture.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frelieve-image-cloud-store%2Fimage%2Fupload%2Fv1695143809%2Fitem-images%2F59874a18-f21d-4c1c-8278-80153e38ed70.jpg&w=828&q=75"
              alt="img"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
        <div className="flex items-center justify-around">
          <p className="text-[14px] text-green-900">MATERIAL</p>
          <div>
            <p className="text-[14px] text-green-900">COLOR</p>
            <p className="text-[14px] text-green-900">White</p>
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 mt-7  gap-2">
          {[...new Array(4)].map((el, index) => {
            return <SpecificationBox key={index} />;
          })}
        </div>

        <div className="mt-10 w-ful hit-fit py-6 px-2  border-b-2">
          <p className="text-[14px] text-gray-500 mt-5">DESCRIPTION</p>
          <p className="text-[16px] py-4 text-green-900">
            HAY Orange and white chairs on wooden legs
          </p>
        </div>

        <p className="text-[13px] py-4 text-green-900">LOCATION</p>
        <p>Jabalpur, Madhya Pradesh 482002 India</p>
        <div className="w-full h-[300px] border  mt-6 rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1922908.9022786145!2d77.5769962465013!3d12.965534649859961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698484505877!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="w-[30%] md:block hidden h-screen border border-red-500">
        <CheckBox />
      </div>
    </div>
  );
};
