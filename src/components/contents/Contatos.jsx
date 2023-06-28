export default function Contatos() {
  return (
    <section id="Contatos" className='relative z-10 bg-black text-white flex flex-col items-center justify-center overflow-hidden w-full'>
      <div className='mx-20 w-full flex flex-col items-center justify-center'>
        <h2 className='my-20 font-extrabold text-5xl'>Contato</h2>
        <div className='flex flex-col gap-4 mb-20 w-9/12'>
          <input type="text" id="name" placeholder="Nome"
            className='bg-transparent border-[0.5px] border-white/50 rounded p-4'
          />
          <input type="mail" id="mail" placeholder="Email"
            className='bg-transparent border-[0.5px] border-white/50 rounded p-4'
          />
          <textarea name="comment" id="msg" placeholder="Menssagem"
            className='bg-transparent border-[0.5px] border-white/50 rounded p-4'>
          </textarea>
          <input type="submit" id="submit"
            className='bg-transparent border-[0.5px] border-white/50 rounded p-4 hover:bg-white/10 cursor-pointer'
          />
        </div>
      </div>
    </section>
  )
}