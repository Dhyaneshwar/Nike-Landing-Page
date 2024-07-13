import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="group flex w-full flex-1 flex-col items-center justify-center py-6 transition-all hover:scale-105 hover:rounded-3xl hover:bg-gradient-to-bl hover:from-purple-200 hover:to-purple-500 hover:shadow-lg max-sm:w-full">
      <img src={imgURL} alt={name} className="h-[282px] w-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5 transition-all group-hover:scale-110">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray group-hover:bg-gradient-to-br group-hover:from-green-200 group-hover:to-green-500 group-hover:bg-clip-text group-hover:font-bold group-hover:text-transparent">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal transition-all group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-green-200 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red transition-all group-hover:scale-110 group-hover:bg-gradient-to-tl group-hover:from-green-200 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
