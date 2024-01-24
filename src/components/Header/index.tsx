"use state";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed top-0 w-[100%] z-10 text-[#7F23CE]">
      <nav className="flex justify-between items-center py-4 px-4">
        <div className="flex items-center gap-5">
          <Link href={"/"} className="text-[24px] font-bold">
            InfotecDevs
          </Link>
          <div className="hidden md:flex gap-6 font-semibold border-l border-gray-400 pl-4">
            <Link href={"/about"} className="hover:text-black">
              Sobre
            </Link>
            <Link href={"/work"} className="hover:text-black">
              Projetos
            </Link>
            <Link href={"/team"} className="hover:text-black">
              Nosso Time
            </Link>
            <Link href={"/contact"} className="hover:text-black">
              Contato
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-full"
            >
              <RiSunLine size={16} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-full"
            >
              <RiMoonFill size={16} />
            </button>
          )}
          <Link
            href={"/message"}
            className="font-semibold hidden md:flex text-red-500 border border-red-500 px-4 py-1 rounded-[5px] items-center gap-2 transition duration-200"
          >
            <MdOutlineMailOutline />
            E-mail
          </Link>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <IoClose
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <GiHamburgerMenu
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <div className="list-none flex justify-end items-start flex-1 flex-col">
              <Link href={"/about"} className="hover:text-black">
                Sobre
              </Link>
              <Link href={"/work"} className="hover:text-black">
                Projetos
              </Link>
              <Link href={"/team"} className="hover:text-black">
                Nosso Time
              </Link>
              <Link href={"/contact"} className="hover:text-black">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
