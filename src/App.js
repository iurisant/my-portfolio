import '../src/styles/App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import NavBar from './components/navBar/NavBar';
import SobreMim from './components/contents/Inicio';
import Habilidades from './components/contents/Habilidades';
import Projetos from './components/contents/Projetos';
import Contatos from './components/contents/Contatos';
import AnimationBack from './components/contents/AnimationBack';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Portifolio</title>
      </Helmet>
      <div className='back-image relative overflow-hidden'>
        <NavBar />
        <SobreMim />
        <AnimationBack />
        <Habilidades />
        <Projetos />
        <Contatos />
      </div>
    </HelmetProvider>
  )
}
