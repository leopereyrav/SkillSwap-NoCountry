'use client';

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';

import TextField from '@/components/TextField';
import Button from '@/components/Button';
import {
  onCheckingRegister,
  onDeleteRegister,
  onLogin,
  onRegisterError,
} from '@/store/slices/authSlice';

export default function RegisterFormComponent() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const router = useRouter();

  const validationSchema = Yup.object({
    username: Yup.string().required('El nombre de usuario es requerido'),
    email: Yup.string()
      .email('Email invalido')
      .required('El email es requerido'),
    password: Yup.string()
      .min(8, 'La contraseña debe de tener 8 caracteres')
      .required('La contraseña es requerida'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben de coincidir')
      .required('Confirma la contraseña'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async ({ username, email, password }, { resetForm }) => {
      dispatch(onCheckingRegister());

      let request = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const response = await request.json();

      if (request.status == 201) {
        toast.success(`Register Succesfully`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        router.push('/habilidad/ensenar');
        dispatch(onLogin(response.data));
        resetForm();
      } else {
        toast.error(response.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        dispatch(onRegisterError(response.error));
      }
    },
  });

  useEffect(() => {
    if (currentUser.statusRegister === 'checking') {
      dispatch(onDeleteRegister());
    }
  }, []);

  return (
    <div className='mx-11 2xl:mt-12'>
      <h1 className='text-center text-4xl font-semibold mb-5 2xl:mb-12'>
        Registro
      </h1>
      <form className='space-y-5 2xl:space-y-7' onSubmit={formik.handleSubmit}>
        <TextField
          name='username'
          id='username'
          label='Usuario'
          placeholder='Username'
          onChange={(value) => formik.setFieldValue('username', value)}
          value={formik.values.username}
          error={formik.errors.username}
        />

        <TextField
          name='email'
          id='email'
          label='Correo electrónico'
          placeholder='ejemplo@ejemplo.com'
          value={formik.values.email}
          onChange={(value) => formik.setFieldValue('email', value)}
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

        <TextField
          name='confirmPassword'
          id='confirmPassword'
          type='password'
          label='Confirmar contraseña'
          placeholder='* * * * * * * *'
          onChange={(value) => formik.setFieldValue('confirmPassword', value)}
          value={formik.values.confirmPassword}
          error={formik.errors.confirmPassword}
        />
        {currentUser.statusRegister === 'checking' ? (
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
            Registrarse
          </Button>
        )}
        <div>
          <span>
            ¿Ya tienes cuenta?{' '}
            <Link className='text-purple-950  text-xs  underline' href='/login'>
              ¡Inicia sesión!
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
