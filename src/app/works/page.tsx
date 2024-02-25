import CardWork from "@/components/CardWork";
import React from "react";

const worksData = [
  {
    id: 1,
    name: "Tatuador Portfólio",
    urlImage: "/images/works/tatuador-home2.png",
    link: "https://portfolio-tatuador.vercel.app/",
  },
  {
    id: 2,
    name: "Agência Digital",
    urlImage: "/images/works/agencia.png",
    link: "https://agencia-next.vercel.app/",
  },
  {
    id: 3,
    name: "Psicóloga Portfólio",
    urlImage: "/images/works/home-psicologa2.png",
    link: "https://psicologa-site.vercel.app/",
  },
  {
    id: 4,
    name: "Delivery",
    urlImage: "/images/works/food-delivery.png",
    link: "https://food-delivery-next-teal.vercel.app/",
  },
  {
    id: 5,
    name: "Pet Shop",
    urlImage: "/images/works/pet-shop.png",
    link: "https://landingpage-pets.vercel.app/",
  },
  {
    id: 6,
    name: "Desenvolvedor Portfólio",
    urlImage: "/images/works/rohdev2.png",
    link: "https://portifoliorfs.vercel.app/",
  },
  {
    id: 7,
    name: "Imobiliária",
    urlImage: "/images/works/imobiliaria.png",
    link: "https://imobiliaria-next-tau.vercel.app/",
  },
  {
    id: 8,
    name: "Academia",
    urlImage: "/images/works/academia.png",
    link: "https://lp-academia.vercel.app/",
  },
];

const page = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-violet-950 md:mb-12 lg:text-3xl">
            Projetos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {worksData.map((work) => (
              <CardWork
                key={work.id}
                link={work.link}
                urlImage={work.urlImage}
                name={work.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
