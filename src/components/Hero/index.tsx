"use client";
import React from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Image from "next/image";

const Hero = () => {
  const numeroDeTelefone = "5511912547271"; // Substitua pelo seu número de telefone

  const handleClickWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?phone=${numeroDeTelefone}`;
    window.open(url, "_blank");
  };
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-5">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          {/* content - start */}
          <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <h1 className="mb-8 text-4xl font-bold text-violet-950 sm:text-5xl md:mb-12 md:text-6xl">
              Desenvolvedores web
            </h1>
            <p className="mb-8 leading-relaxed text-violet-950 md:mb-12 lg:w-4/5 xl:text-lg">
              Somos um grupo de desenvolvedores de sites e sistemas web,
              apaixonados por transformar ideias em realidade digital.
              Combinamos nossa expertise técnica e criativa para criar soluções
              digitais inovadoras que atendem às necessidades e superam as
              expectativas dos nossos clientes.
            </p>
            <div className="text-5xl flex justify-center items-center gap-16 py-3 text-violet-950">
              <div className="hover:text-violet-800 hover:scale-125">
                <AiFillInstagram />
              </div>
              <div className="hover:text-violet-800 hover:scale-125">
                <AiFillLinkedin />
              </div>

              <div
                onClick={handleClickWhatsapp}
                className="hover:text-violet-800 hover:scale-125"
              >
                <AiOutlineWhatsApp />
              </div>
            </div>
          </div>

          <div className="h-48 overflow-hidden bg-gray-100 lg:h-auto xl:w-5/12">
            <img
              src="/images/violet.png"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
