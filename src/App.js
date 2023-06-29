import '../src/styles/App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import NavBar from './components/navBar/NavBar';
import SobreMim from './components/contents/Inicio';
import Habilidades from './components/contents/Habilidades';
import Projetos from './components/contents/Projetos';
import Contatos from './components/contents/Contatos';
import AnimationBack from './components/contents/AnimationBack';
import OnlyUp from './components/modal/OnlyUp';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Portifolio</title>
      </Helmet>
      <header className='back-image relative overflow-hidden'>
        <NavBar />
        <SobreMim />
        <AnimationBack />
      </header>
      <main className='bg-zinc-50'>
        <Habilidades />
        <Projetos />
        <OnlyUp />
      </main>
      <footer>
        <Contatos />
      </footer>
    </HelmetProvider>
  )
}
