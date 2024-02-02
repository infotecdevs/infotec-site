import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";

const skillsData = [
  {
    name: "E-commerce (Loja virtual)",
    icon: (
      <FaShoppingCart className="text-5xl text-violet-950 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Sua Loja virtual desenvolvida por especialista em WooCommerce.",
  },
  {
    name: "Site Institucional",
    icon: (
      <FaLaptopCode className="text-5xl text-violet-950 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Um site visualmente agradável, rápido e otimizado para o Google",
  },
  {
    name: "Landing Pages",
    icon: (
      <FaAddressCard className="text-5xl text-violet-950 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Landing pages atraentes e eficazes que convertam visitantes em leads. ",
  },
  {
    name: "Google ADS",
    icon: (
      <SiGoogleads className="text-5xl text-violet-950 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Aumente suas vendas e alcance novos clientes com o Google Ads.",
  },
  {
    name: "SEO Marketing",
    icon: (
      <GiNotebook className="text-5xl text-violet-950 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Seu site nas primeira páginas do Google com SEO Marketing",
  },
  {
    name: "Suporte Gerenciado WordPress",
    icon: (
      <FaWordpressSimple className="text-5xl text-violet-950 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Atualizações e Manutenção Mensal em seu site WordPress. ",
  },
];
const Skills = () => {
  return (
    <>
      <span id="about"></span>
      <div className="py-14">
        <div className="mx-2 md:mx-5">
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 md:gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill}
                className=" card group space-y-3 p-4 rounded-md bg-dark  hover:bg-violet-950 hover:text-white duration-300
                 transition-all text-violet-950 shadow-md hover:scale-105"
              >
                <div>{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p className='font-semibold'>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
