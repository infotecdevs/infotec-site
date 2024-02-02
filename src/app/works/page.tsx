import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-violet-950 md:mb-12 lg:text-3xl">
            Projetos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <a
                href="https://portfolio-tatuador.vercel.app/"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
              shadow-lg"
              >
                <img
                  src="/images/works/tatuador-home2.png"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
                  <span className="text-lg font-bold text-violet-950 lg:text-xl">
                    Tatuador Portfólio
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href=""
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
              shadow-lg"
              >
                <img
                  src="/images/works/work3.png"
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
                  <span className="text-lg font-bold text-violet-950 lg:text-xl">

                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="https://portifoliorfs.vercel.app/"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
              shadow-lg"
              >
                <img
                  src="/images/works/rohdev2.png"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200
                 group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
                  <span className="text-lg font-bold text-violet-950 lg:text-xl">
                    Desenvolvedor Portfólio
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
              shadow-lg"
              >
                <img
                  src="/images/works/work2.png"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
                  <span className="text-lg font-bold text-violet-950 lg:text-xl">
                    Summer Season
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
              shadow-lg"
              >
                <img
                  src="/images/works/work1.png"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
                  <span className="text-lg font-bold text-violet-950 lg:text-xl">
                    Summer Season
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
              shadow-lg"
              >
                <img
                  src="/images/works/work4.png"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
                  <span className="text-lg font-bold text-violet-950 lg:text-xl">
                    Summer Season
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
              shadow-lg"
              >
                <img
                  src="/images/works/work4.png"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
                  <span className="text-lg font-bold text-violet-950 lg:text-xl">
                    Summer Season
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 
              shadow-lg"
              >
                <img
                  src="/images/works/work4.png"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110"
                />
                <div className="relative flex w-full flex-col rounded-lg bg-gray-200 p-1 text-center">
                  <span className="text-lg font-bold text-violet-950 lg:text-xl">
                    Summer Season
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default page;
