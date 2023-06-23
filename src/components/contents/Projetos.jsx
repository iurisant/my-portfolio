import ModalProjetos from "../modal/ModalProjetos";

export default function Projetos() {
  return (
    <section id="Projetos" className='relative z-10 py-20 flex flex-col justify-center items-center text-black overflow-hidden'>
      <h2 className='font-extrabold text-5xl'>Projetos</h2>
      <span className='my-12 border' />
      <ModalProjetos />
    </section>
  )
}