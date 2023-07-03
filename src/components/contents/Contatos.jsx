import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

export default function Contatos() {
  const handleClickContato = async (values, { resetForm }) => {
    const params = {
      from_name: values.name,
      email: values.email,
      message: values.message,
    }
    await emailjs.send("service_tdkvzla", "template_un1pqle", params, "u1V9F48CBESTJUt0t")
      .then((response) => {
        console.log(response)
        toast.success("Enviado com Sucesso!")
        resetForm(); // Limpa os valores do formulário
      }, (err) => {
        console.log(err)
        toast.error("Falha no envio!")
      });
  };

  const validationForm = yup.object().shape({
    name: yup.string()
      .max(64, 'Máximo de 64 caracteres!')
      .required('Este campo é obrigatório!'),

    email: yup.string()
      .max(64, 'Máximo de 64 caracteres!')
      .email('Email inválido!')
      .required('Este campo é obrigatório!'),

    message: yup.string()
      .max(256, 'Máximo de 256 caracteres!')
      .required('Este campo é obrigatório!'),
  })

  return (
    <>
      <section id="Contatos" className='back-image relative z-10 bg-black text-white flex flex-col items-center justify-center overflow-hidden'>
        <div className='w-full flex flex-col items-center justify-center'>
          <h2 className='my-20 font-extrabold text-5xl'>Contato</h2>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            onSubmit={handleClickContato}
            validationSchema={validationForm}
          >
            {({ values }) => (
              <Form className='w-9/12 max-w-[1500px] flex flex-col items-center justify-center gap-4 mb-20'>
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
                  id="message"
                  name="message"
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
            )}
          </Formik>
        </div>
      </section>
    </>
  )
}
