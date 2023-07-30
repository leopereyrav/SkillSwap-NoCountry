'use client';

import Button from '@/components/Button';
import TextField from '@/components/TextField';
import resetPassword from '@/services/resetPassword';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

export default function Habilidades() {
  const router = useRouter();

  const { values, handleSubmit, errors, setFieldValue } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Coloca un email valido')
        .required('El email es requerido'),
    }),
    onSubmit: async (values) => {
      const request = await resetPassword(values.email);
      const response = await request.json();
      if (request.status === 200) {
        setFieldValue('email', '');
        router.push('/restablecer/exitoso');
      } else {
        alert('Ocurrió un error, intenta de nuevo', response.mgs);
      }
    },
  });

  return (
    <div className='h-full'>
      <h1 className='text-4xl text-center mt-5'>Recupera tu acceso</h1>
      <div className='h-full flex justify-center'>
        <div className='flex items-center justify-center flex-col h-[80%] w-fit'>
          <h2 className='text-xl'>
            Ingresa tu correo y te enviaremos un enlace para que ingreses una
            nueva contraseña
          </h2>
          <form onSubmit={handleSubmit} className='space-y-8 mt-10 w-full'>
            <TextField
              name='email'
              type='email'
              placeholder='Correo electrónico'
              id='email'
              customClassNames='w-full'
              value={values.email}
              onChange={(value) => setFieldValue('email', value)}
              error={errors.email}
            />
            <Button
              type='submit'
              customClassNames='w-full text-black rounded-xl bg-yellowPrimary'
            >
              Enviar correo
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
