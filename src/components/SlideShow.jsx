import { useEffect, useState } from "react";
import { slideShow } from "../constant";

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [resetInterval, setResetInterval] = useState(false);

  const getIndexValue = (currentIndex) => {
    if (currentIndex < 0) return slideShow.length - 1;
    else if (currentIndex >= slideShow.length) return 0;
    return currentIndex;
  };

  useEffect(() => {
    const interval = setInterval(
      () => setSlideIndex((prevState) => getIndexValue(prevState + 1)),
      3000,
    );
    return () => clearInterval(interval);
  }, [resetInterval]);

  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="flex gap-2">
            {slideShow.map(({ imgURL, noBackground }, index) => (
              <div
                key={index}
                className={`${noBackground ? "" : "rounded-3xl bg-primary bg-hero bg-cover bg-center"} ${slideIndex === index ? "" : "hidden"}`}
              >
                <img
                  src={imgURL}
                  width={570}
                  height={522}
                  className="h-[570px] w-[522px] object-contain"
                />
              </div>
            ))}
          </div>
          <a
            onClick={() => {
              setResetInterval((prev) => !prev);
              setSlideIndex((prevState) => getIndexValue(prevState - 1));
            }}
            className="absolute -left-8 top-[43%] cursor-pointer rounded-lg p-2 text-lg transition-all duration-500 hover:bg-black/30"
          >
            &#10094;
          </a>
          <a
            onClick={() => {
              setResetInterval((prev) => !prev);
              setSlideIndex((prevState) => getIndexValue(prevState + 1));
            }}
            className="absolute -right-8 top-[43%] cursor-pointer rounded-lg p-2 text-lg transition-all duration-500 hover:bg-black/30"
          >
            &#10095;
          </a>
        </div>
        <div className="mt-4 flex gap-2">
          {slideShow.map((_, index) => (
            <p
              key={index}
              className={`size-4 rounded-full ${slideIndex === index ? "bg-slate-700" : "bg-slate-300"} cursor-pointer`}
              onClick={() => {
                setResetInterval((prev) => !prev);
                setSlideIndex(index);
              }}
            ></p>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlideShow;
