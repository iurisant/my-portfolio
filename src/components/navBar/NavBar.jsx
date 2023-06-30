//imgns
import Home from '../../img/home.svg';
import Puzzle from '../../img/puzzle.svg';
import Rocket from '../../img/rocket.svg';
import Contacts from '../../img/contact.svg';

export default function navBar() {
  return (
    <div id="Inicio" className="p-0 relative z-10 ">
      <nav className="flex items-center justify-center p-6 ">
        <div className="lg:flex gap-x-36 text-base max-h-4 max-w-[792px] hidden">
          <a href="#Inicio" className="font-semibold leading-6 text-white flex items-center justify-center group hover:text-lg max-w-[60px]">
            <img
              className="mr-2 group-hover:w-5"
              src={Home}
              alt="Início"
              width={16}
            />
            Início
          </a>
          <a href="#Habilidades" className="font-semibold leading-6 text-white flex items-center justify-center group hover:text-lg max-w-[110px]">
            <img
              className="mr-2 group-hover:w-5"
              src={Puzzle}
              alt="Habilidades"
              width={16}
            />
            Habilidades
          </a>
          <a href="#Projetos" className="font-semibold leading-6 text-white flex items-center justify-center group hover:text-lg max-w-[84px]">
            <img
              className="mr-2 group-hover:w-5"
              src={Rocket}
              alt="Projetos"
              width={16}
            />
            Projetos
          </a>
          <a href="#Contatos" className="font-semibold leading-6 text-white flex items-center justify-center group hover:text-lg max-w-[90px]">
            <img
              className="mr-2 group-hover:w-5"
              src={Contacts}
              alt="Contatos"
              width={16}
            />
            Contatos
          </a>
        </div>
      </nav>
    </div>
  )
}