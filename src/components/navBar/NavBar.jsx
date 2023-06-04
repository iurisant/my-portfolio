//imgns
import Home from '../../img/home.svg';
import Puzzle from '../../img/puzzle.svg';
import Rocket from '../../img/rocket.svg';
import Contacts from '../../img/contact.svg';

export default function navBar() {
  return (
    <header id="Inicio" className="p-0 relative z-10 ">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
        <div className="hidden lg:flex gap-x-24 text-base max-h-6">
          <a href="#Inicio" className="font-semibold leading-6 text-white flex items-center justify-center group hover:text-lg">
            <img
              className="mr-2 group-hover:w-5"
              src={Home}
              alt="Início"
              width={16}
            />
            Início
          </a>
          <a href="#Habilidades" className="font-semibold leading-6 text-white flex items-center justify-center group hover:text-lg">
            <img
              className="mr-2 group-hover:w-5"
              src={Puzzle}
              alt="Habilidades"
              width={16}
            />
            Habilidades
          </a>
          <a href="#Projetos" className="font-semibold leading-6 text-white flex items-center justify-center group hover:text-lg">
            <img
              className="mr-2 group-hover:w-5"
              src={Rocket}
              alt="Projetos"
              width={16}
            />
            Projetos
          </a>
          <a href="#Contatos" className="font-semibold leading-6 text-white flex items-center justify-center group hover:text-lg">
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
    </header>
  )
}