import { Formik, Form, Field } from 'formik';

export default function Contatos() {
  return (
    <>
      <section id="Contatos" className='back-image relative z-10 bg-black text-white flex flex-col items-center justify-center overflow-hidden'>
        <div className='w-full flex flex-col items-center justify-center'>
          <h2 className='my-20 font-extrabold text-5xl'>Contato</h2>
          <Formik
            initialValues={{ name: '', email: '', description: '' }}
            onSubmit={() => { }}
          //validationSchema={() => { }}
          >
            <Form className='w-9/12 flex flex-col items-center justify-center gap-4 mb-20'>
              <Field
                className='bg-transparent border-[0.5px] border-white/50 rounded p-4 w-full'
                type='name'
                name='name'
                id='name'
                placeholder='Nome'
                maxLength="64"
              />
              <Field
                className='bg-transparent border-[0.5px] border-white/50 rounded p-4 w-full'
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                maxLength="64"
              />
              <Field
                className='bg-transparent border-[0.5px] border-white/50 rounded p-4 w-full max-h-[154px]'
                as="textarea"
                id="description"
                name="description"
                placeholder='Mensagem'
                maxLength="512"
              />
              <button
                className='bg-transparent border-[0.5px] border-white/50 rounded p-4 w-full'
                type='submit'
              >
                Enviar
              </button>
            </Form>
          </Formik>
        </div>
      </section>

    </>
  )
}