'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@/components/TextField';
import Button from '@/components/Button';

export default function SkillForm({ fetchingDataFunction }) {
  const formValidation = Yup.object({
    title: Yup.string().required('Campo requerido'),
    description: Yup.string().required('Campo requerido'),
    category: Yup.string().required('Campo requerido'),
    level: Yup.string().required('Campo requerido'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      category: '',
      level: '',
    },
    validationSchema: formValidation,
    onSubmit: (values, { resetForm }) => {
      fetchingDataFunction();
      resetForm();
    },
  });

  return (
    <form
      className='space-y-4 bg-purple-200 container p-6 m-4 flex flex-col items-center'
      onSubmit={formik.handleSubmit}
    >
      <TextField
        name='title'
        id='title'
        type='text'
        label='Habilidad'
        placeholder='Ingrese su habilidad'
        onChange={(value) => formik.setFieldValue('title', value)}
        value={formik.values.title}
        error={formik.values.title}
      />

      <TextField
        name='description'
        id='description'
        type='text'
        label='Descripcion'
        placeholder='Describa de forma breve su habilidad'
        onChange={(value) => formik.setFieldValue('description', value)}
        value={formik.values.description}
        error={formik.values.description}
      />

      <TextField
        name='category'
        id='category'
        type='text'
        label='Categoria'
        placeholder='Seleccione categoria'
        onChange={(value) => formik.setFieldValue('category', value)}
        value={formik.values.category}
        error={formik.values.category}
      />

      <TextField
        name='level'
        id='level'
        type='text'
        label='Nivel'
        placeholder='Seleccione nivel'
        onChange={(value) => formik.setFieldValue('level', value)}
        value={formik.values.level}
        error={formik.values.level}
      />

      <Button type='submit'>Agregar</Button>
    </form>
  );
}
