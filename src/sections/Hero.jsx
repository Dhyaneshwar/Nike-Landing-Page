import { useState } from "react";

import { shoes, statistics } from "../constant";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="max-container flex min-h-screen w-full flex-col justify-center gap-10 p-2 xl:flex-row">
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="relative inline-block transition-all before:transition-all before:duration-700 hover:before:absolute hover:before:-inset-0 hover:before:-bottom-3 hover:before:z-20 hover:before:block hover:before:-skew-y-3 hover:before:bg-pink-500">
            <span className="relative z-30 mt-3 inline-block animate-bounce text-coral-red hover:text-white">
              Nike
            </span>
          </span>{" "}
          Shoes
        </h1>
        <p className="mb-14 mt-6 w-96 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="mt-20 flex w-full flex-wrap items-start justify-center gap-16">
          {statistics.map(({ label, value }, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="relative z-10 object-contain"
        />

        <div className="absolute -bottom-[5%] flex gap-4 max-sm:left-[10%] max-sm:px-6 sm:gap-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
