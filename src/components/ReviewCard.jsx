import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="group flex flex-col items-center justify-center">
      <div className="h-[120px] w-[120px] overflow-hidden">
        <img
          src={imgURL}
          alt="customer"
          className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-125"
        />
      </div>
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating star"
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
