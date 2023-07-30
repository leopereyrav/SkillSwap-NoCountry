'use client';

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@/components/TextField';
import Button from '@/components/Button';
import {
  onChecking,
  onLogin,
  onLoginError,
  onLogout,
} from '@/store/slices/authSlice';

export default function LoginFormComponent() {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Formato de correo electrónico inválido')
      .required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }, { resetForm }) => {
      dispatch(onChecking());

      const request = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const response = await request.json();

      if (request.status === 201) {
        toast.success(`Login Succesfully`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        dispatch(onLogin(response.data));
        resetForm();
        router.push('/home');
      } else {
        toast.error(response.error, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        dispatch(onLoginError(response.error));
      }
    },
  });

  useEffect(() => {
    if (currentUser.status === 'checking') {
      dispatch(onLogout());
    }
  }, []);

  return (
    <div className='mx-11 2xl:mt-12'>
      <h1 className='text-center text-4xl font-semibold 2xl:mb-12 mt-[3rem] mb-[3rem]'>
        Iniciar Sesión.
      </h1>
      <form className='space-y-5 2xl:space-y-7' onSubmit={formik.handleSubmit}>
        <TextField
          name='email'
          id='email'
          label='Correo Electronico'
          placeholder='ejemplo@ejemplo.com'
          onChange={(value) => formik.setFieldValue('email', value)}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <TextField
          name='password'
          id='password'
          type='password'
          label='Contraseña'
          placeholder='* * * * * * * *'
          onChange={(value) => formik.setFieldValue('password', value)}
          value={formik.values.password}
          error={formik.errors.password}
        />

        {currentUser.status === 'checking' ? (
          <button
            disabled
            className='w-full bg-yellowPrimary text-purplePrimary rounded-full text-bold px-3 py-2 flex justify-center items-center'
          >
            <Oval
              height={20}
              width={20}
              color='blue'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor=''
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </button>
        ) : (
          <Button
            customClassNames={
              'w-full bg-yellowPrimary text-purplePrimary rounded-full text-bold'
            }
            type='submit'
          >
            Iniciar Sesión.
          </Button>
        )}

        <div>
          <p className='my-2'>
            <Link
              className='text-purple-950 underline mx-2'
              href='/restablecer'
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
          <p className='my-2'>
            <span>Aun no tienes Cuenta?</span>
            <Link
              className='text-purpleSecondary  text-xs  underline mx-2'
              href='/register'
            >
              ¡Registrate!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
