import React from "react";
import { NewsLetter, Title } from "../components";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title textOne={"About"} textTwo={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            corporis eaque excepturi commodi esse. Labore, sit doloribus.
            Mollitia assumenda quaerat tenetur sint veritatis id maiores
            blanditiis, incidunt obcaecati, odio ratione quas, eligendi ipsum
            porro? Ipsum, adipisci odit, eveniet deleniti omnis dolore pariatur
            nisi consectetur, reprehenderit facilis eos. Ea, tempore quisquam?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            molestiae fugit distinctio tempora, dolor sequi quae voluptate iusto
            placeat accusamus! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Minus odit tenetur id aliquid alias, atque cumque
            doloremque odio unde maiores perferendis, corporis enim.
            Perspiciatis ducimus blanditiis, dicta mollitia fugit et.{" "}
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut
            consequuntur eaque veniam maxime doloribus esse doloremque hic totam
            nemo fugit, dolorum temporibus placeat exercitationem ipsam ratione
            consectetur modi! Odit!
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title textOne={"Why"} textTwo={"choose us"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            natus quia fuga velit, minima assumenda quam voluptatem, iure
            perspiciatis itaque dolore rerum accusamus est voluptates
            reprehenderit exercitationem vel, libero nostrum!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            natus quia fuga velit, minima assumenda quam voluptatem, iure
            perspiciatis itaque dolore rerum accusamus est voluptates
            reprehenderit exercitationem vel, libero nostrum! Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Omnis, quaerat.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Coustomer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            natus quia fuga velit, minima assumenda quam voluptatem, iure
            perspiciatis itaque dolore rerum accusamus est voluptates.
          </p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
};

export default About;
