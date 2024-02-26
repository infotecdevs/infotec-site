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
    <>
      <div className="relative">
        <div className="absolute inset-0 w-full h-full">
          <Image src="/images/dedo-grande.jpg" width={1920} height={1080} alt="hero" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="relative grid grid-cols-1 place-items-center h-screen">
          <div className=" text-center text-white font-bold z-10">
            <div className="space-y-3 bg-[rgb(16,31,45)] p-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-7xl text-white font-bold">Especialistas Next14</h1>
              <p className="text-xl md:text-2xl xl:text-5xl text-white font-bold">Quer saber sobre complice e precisa de um advogado especialista para te ajudar?</p>
              <button className="uppercase rounded-lg bg-green-700 hover:bg-white hover:text-green-700 duration-500 py-2 px-6 text-white">
                Entre em contato agora mesmo
              </button>
            </div>
          </div>
        </div>
      </div>


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
    </>
  );
};

export default Hero;
