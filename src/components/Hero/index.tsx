import React from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Image from "next/image";

const Hero = () => {
  return (
    // <div className="h-full w-full flex flex-col items-center justify-center gap-5">
    //   <img
    //     src="/images/site/img5.jpg"
    //     alt="imagem"
    //     className="w-[350px] h-[270px] object-cover mt-10"
    //   ></img>

    //   <div className="bg-gray-600 h-[2px] w-[40px]"></div>

    //   <div className="w-[80%] md:w-[450px] text-primary flex flex-col items-center justify-center gap-[40px]">
    //     <div>
    //       <p data-aos="fade-up" className="text-justify">
    //         Somos um grupo de desenvolvedores de sites e aplicativos apaixonados
    //         por transformar ideias em realidade digital. Combinamos nossa
    //         expertise técnica e criativa para criar soluções digitais inovadoras
    //         que atendem às necessidades e superam as expectativas dos nossos
    //         clientes.
    //       </p>
    //     </div>
    //     <div
    //       data-aos="fade-up"
    //       className="text-5xl w-full flex justify-center items-center gap-16 py-3 text-primary"
    //     >
    //       <AiFillInstagram />
    //       <AiFillLinkedin />
    //       <AiOutlineWhatsApp />
    //     </div>
    //   </div>
    // </div>

    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start
         md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Desenvolvedores
            <br className="hidden lg:inline-block" />
            backend e frontend
          </h1>
          <p className="mb-8 leading-relaxed">
            Somos um grupo de desenvolvedores de sites e sistemas web,
            apaixonados por transformar ideias em realidade digital. Combinamos
            nossa expertise técnica e criativa para criar soluções digitais
            inovadoras que atendem às necessidades e superam as expectativas dos
            nossos clientes.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/site/i5.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
