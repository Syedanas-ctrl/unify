"use client";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div style={{backgroundImage: `url(${feature?.backgroundImage})`}} className={`w-full bg-cover`}>
      <div className="wow fadeInUp p-6 h-full w-full backdrop-brightness-[0.30]" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-white bg-opacity-10 text-white">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-white opacity-70 font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
