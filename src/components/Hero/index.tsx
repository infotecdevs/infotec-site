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
      <div className="mx-2 md:mx-5">
        <section className="flex flex-col justify-center gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          {/* content - start */}
          <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <h1 className="mb-8 text-4xl font-bold text-violet-950 sm:text-5xl md:mb-12 md:text-6xl">
              Especialistas Next14
            </h1>
            <div className="font-semibold mb-8 leading-relaxed text-violet-gray-900 md:mb-12 lg:w-4/5 xl:text-lg">
              Criamos seu Site e te colocamos no topo do Google Sites
              estruturados e pensados para a sua empresa. Com um site
              profissional você garante mais visibilidade, credibilidade e
              vendas.
              <ul className="text-violet-800">
                <li>Otimizado para o Google</li>
                <li>Site pronto em 15 dias</li>
                <li>Páginas do seu site super rápidas</li>
              </ul>
            </div>
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
              alt="imagem"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
