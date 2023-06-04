import Image from 'next/image';

//Imagens
import Home from '../../img/home.svg';
import Puzzle from '../../img/puzzle.svg';
import Rocket from '../../img/rocket.svg';
import Contacts from '../../img/contact.svg';


export default function navBarFlutuante() {
  return (
    <span className='bg-sky-800 rounded-xl p-1 fixed z-20 top-1/3 left-1 flex flex-col lg:left-6 '>
      <a href='#Inicio' className='hover:bg-sky-950 rounded-xl p-3 mb-1'>
        <Image
          src={Home}
          alt="Inicio"
          width={24}
        />
      </a>
      <a href='#Habilidades' className='hover:bg-sky-950 rounded-xl p-3 my-1'>
        <Image
          src={Puzzle}
          alt="Habilidades"
          width={24}
        />
      </a>
      <a href='#Projetos' className='hover:bg-sky-950 rounded-xl p-3 my-1'>
        <Image
          src={Rocket}
          alt="Projetos"
          width={24}
        />
      </a>
      <a href='#Contato' className='hover:bg-sky-950 rounded-xl p-3 mt-1'>
        <Image
          src={Contacts}
          alt="Contato"
          width={24}
        />
      </a>
    </span>
  )
}