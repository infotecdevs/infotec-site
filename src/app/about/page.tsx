import React from "react";
import Link from "next/link";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";

const page = () => {
  return (
    <section id="sobre" className="container mx-auto py-10 px-4">
      <div className="text-violet-950 text-[32px] font-medium flex items-center gap-2 py-4">
        Sobre nós
        <div className="bg-violet-950 h-[2px] w-[40px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="h-full md:h-48 overflow-hidden bg-gray-100 lg:h-auto xl:w-8/12">
          <img
            src="/images/building.png"
            loading="lazy"
            alt="imagem"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <div className="flex flex-items justify-between w-[350px]">
            <div className="flex flex-col gap-4 font-bold text-violet-950">
              <div className="flex gap-4 items-center">
                <AiOutlineGift className="text-[22px]" />
                Fundada
              </div>
              <div className="flex gap-4 items-center">
                <FiBookOpen className="text-[22px]" />
                Estudos
              </div>
              <div className="flex gap-4 items-center">
                <BsGlobe2 className="text-[22px]" />
                Website
              </div>
              <div className="flex gap-4 items-center">
                <TbPacman className="text-[22px]" />
                Interesses
              </div>
              <div className="flex gap-4 items-center">
                <IoLocationOutline className="text-[22px]" />
                Localização
              </div>
            </div>
            <div className="flex flex-col gap-4 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="flex flex-col gap-4 text-gray-600">
              <div>20.05.2023</div>
              <div>ADS</div>
              <div>www.infotecdevs.com.br</div>
              <div>Web e Mobile</div>
              <div>Cotia-SP</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="font-bold mt-8 mb-4 text-violet-950">
              Desenvolvedores Frontend e Backend
            </h2>
            <p className="text-gray-600 text-justify">
              Nossa equipe altamente qualificada está sempre atualizada com as
              últimas tendências e tecnologias, garantindo que nossos projetos
              sejam construídos com os mais altos padrões de qualidade. Seja
              você um pequeno negócio em busca de uma presença online impactante
              ou uma grande empresa em busca de uma plataforma personalizada,
              estamos prontos para colaborar e tornar sua visão digital em uma
              realidade impressionante. Junte-se a nós e descubra como podemos
              transformar sua ideia em um site ou aplicativo de sucesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
