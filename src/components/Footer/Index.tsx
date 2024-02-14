import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";




const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-violet-950 text-white w-full py-12">
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 mx-4 sm:mx-8 md:mx-20'>

          <div className='bg-violet-500 border-violet-500 hover:border-gray-800 p-4 rounded-md h-full flex-1  w-full'>
            <span className='gap-2'>
              <FaWhatsapp />

              WhatsApp
            </span>
            <p>Fale com a gente</p>

          </div>

          <div className='bg-violet-500 border-violet-500 hover:border-gray-800 p-4 rounded-md h-full flex-1  w-full'>
            <span className='gap-2'>
              <MdSupportAgent />

              Área do cliente
            </span>
            <p>Converse com o Suporte Técnico</p>
          </div>

          <div className='bg-violet-500 border-violet-500 hover:border-gray-800 p-4 rounded-md h-full flex-1 w-full'>
            <span className='gap-2'><IoLocationOutline />Endereço
            </span>
            <p>R. Oito, 627 - Ilha dos Araújos,
              Governador Valadares - MG , 35020-700</p>
          </div>
        </div>
      </div>

      <div className='bg-violet-950'>
        <div className="border-t border-gray-600 mx-40"></div>
      </div>

      <div className=' bg-violet-950 text-white w-full py-12'>

        <div className='grid grid-cols-1 mx-4 sm:mx-8 md:mx-20 gap-4 md:grid-cols-4 md:items-center'>
          <div>
            <ul >
              <li>Serviços</li>
              <li>Criação de Site</li>
              <li>Criação de Loja Virtual</li>
              <li>Suporte Gerenciado WordPress</li>
              <li>E-mail Profissional</li>
              <li>Hospedagem WordPress</li>
              <li>Migre para StartSite</li>
              <li>Sistema de Atendimento WhatsApp</li>
            </ul>
          </div>

          <div>
            <ul>
              <li> Sobre StartSite</li>
              <li> Quem Somos</li>
              <li>Portfólio</li>
              <li> Blog</li>
              <li> Depoimentos</li>
              <li> Indique e Ganhe</li>
            </ul>

          </div>

          <div>
            <ul>
              <li>Soluções em Marketing</li>
              <li> Google Ads</li>
              <li>
                SEO Marketing</li>
              <li>Consultoria em Marketing</li>
            </ul>

          </div>

          <div>
            <ul>
              <li>Ajuda</li>
              <li> Área do Cliente</li>
              <li>Suporte</li>
              <li>Fale com a gente</li>
              <li>Canais de Atendimento</li>
            </ul>

          </div>
        </div>
      </div>


      <div className='p-20 bg-white'>
        <span>

        </span>

      </div>

      <div className='p-20 bg-violet-950'>


      </div>
    </>
  )

}

export default Footer;