import React from "react";

type Props = {
  link: string;
  urlImage: string;
  name: string;
};

const CardWork = ({ link, urlImage, name }: Props) => {
  return (
    <div>
      <a
        href={link}
        className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
    shadow-lg"
      >
        <img
          src={urlImage}
          loading="lazy"
          alt="Photo by Austin Wade"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
      group-hover:scale-110"
        />
        <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
          <span className="text-lg font-bold text-violet-950 lg:text-xl">
            {name}
          </span>
        </div>
      </a>
    </div>
  );
};

export default CardWork;
