import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white fixed top-0 w-[100%] z-10">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className='flex items-center gap-5'>
          <Link href={"/"} className="text-[24px] font-bold">
            InfotecDevs
          </Link>
          <div className="hidden md:flex gap-6 font-bold border-l border-gray-400 pl-4">
            <Link href={"/about"} className="hover:text-gray-200">
              Sobre
            </Link>
            <Link href={"/work"} className="hover:text-gray-200">
              Projetos
            </Link>
            <Link href={"/team"} className="hover:text-gray-200">
              Nosso Time
            </Link>
            <Link href={"/contact"} className="hover:text-gray-200">
              Contato
            </Link>
          </div>
        </div>
        <Link
          href={"/message"}
          className="font-bold hidden md:flex text-gray-600 border border-gray-600 px-4 py-1 rounded-[5px] items-center gap-2 hover:bg-gray-600 hover:text-white transition duration-200"
        >
          Enviar Mensagem
        </Link>
        {/* <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
          <FiMenu />
        </div> */}
      </nav>
    </header>
  )
}

export default Header