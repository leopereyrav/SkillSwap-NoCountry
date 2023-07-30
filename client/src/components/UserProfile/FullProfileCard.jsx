'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import EditModal from './EditModal';
import Link from 'next/link';
import { BACKEND_URL_BASE } from '@/config';

function UserProfileCard({ user, instructor_id }) {
  const [openModal, setOpenModal] = useState(false);

  const currentUser = useSelector((state) => state.user);
  const [selectHour, setSelectHour] = useState(null);
  const [selectDay, setSelectDay] = useState({});

  const handleSelectHour = (hour) => {
    setSelectHour(hour);
  };

  const handleSelectDay = (day) => {
    setSelectDay(day);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleMeeting = () => {
    let hour1 = Number(selectHour.startTime.split(':')[0]);

    let hora = new Date();
    hora.setUTCHours(hour1);
    const newMeeting = {
      message: 'Prueba de implementación de API REST 2',
      title: 'Reunión de revisión de código 2',
      status: 'pending',
      instructor_id: instructor_id,
      meeting_date: '2023-07-31T15:00:00Z',
      start_meeting: hora.toString(),
      end_meeting: '2023-07-31T15:00:00Z',
      duration_meeting: '1 hora',
    };

    console.log(currentUser.token);
    console.log(newMeeting);

    fetch(`${BACKEND_URL_BASE}/meetings`, {
      method: 'POST',
      headers: {
        Authorization: 'BEARER ' + currentUser.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMeeting),
    })
      .then((data) => data.json())
      .then((result) => {
        console.log('result>>>>', result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='bg-white grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 w-auto h-fit max-w-4xl gap-4 overflow-hidden mx-auto'>
      <div className='bg-purpleThirty p-2 sm:p-4 md:p-6 lg:p-8 sm:col-span-3 md:col-span-5 lg:col-span-7 rounded-md'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <img
              src={
                user?.profile?.avatar?.secure_url
                  ? user?.profile?.avatar?.secure_url
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
              }
              alt='#'
              className='w-20 sm:w-24 md:w-32 lg:w-40 rounded-full'
            />
          </div>
          <div className='flex flex-col content-between gap-4'>
            <h1 className='text-2xl font-bold'>
              {user?.profile?.name + ' ' + user?.profile?.last_name}
            </h1>
            <h4>
              Area de conocimiento:{' '}
              {user?.profile?.skills.map((skill, index) => (
                <span key={index} className='bg-purpleSecondary p-2 rounded-xl text-white text-xs'>
                  {skill?.name}
                </span>
              ))}
            </h4>
            <h4>
              Nivel:{' '}
              {user?.profile?.skills.map((skill, index) => (
                <span key={index} className='bg-purpleSecondary p-2 rounded-xl text-white text-xs'>
                  {skill?.level}
                </span>
              ))}
            </h4>
          </div>
          <div className='flex flex-col gap-16'>
            <div className='flex justify-end'>
              <Link href={'#'} className=''>
                <MdEdit
                  className='text-purpleSecondary'
                  onClick={handleModal}
                />
              </Link>
            </div>
            <div className='flex flex-row items-center gap-1 capitalize'>
              <FaLocationDot className='text-purpleSecondary inline' />

              <span>{user?.profile?.country}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-purpleThirty p-2 sm:p-4 md:p-6 lg:p-8 sm:col-span-2 md:col-span-3 lg:col-span-5 rounded-md '>
        <div className='flex flex-col gap-24'>
          <div>
            <h4>Sobre mi experiencia:</h4>
            <p>Aun sin descripcion.</p>
          </div>
          <div>
            <h4>Valoraciones:</h4>
            <p>Aun sin valoraciones.</p>
          </div>
        </div>
      </div>
      <div className='bg-purpleThirty p-2 sm:p-4 md:p-6 lg:p-8 sm:col-span-1 md:col-span-2 lg:col-span-2 rounded-md'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row items-center justify-center gap-4 px-4'>
            <h2 className='text-xl'>Disponibilidad</h2>
            <Link href={'#'}>
              <MdEdit onClick={handleModal} className='text-purpleSecondary' />
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            <p>Dias: </p>

            {user?.schedules?.map((schedule, index) => (
              <span
              key={index}
                onClick={() => handleSelectDay(schedule?.day_of_week)}
                className={
                  selectDay === schedule?.day_of_week
                    ? 'w-1/2 h-auto py-1 px-1 rounded-md border-2 border-purpleSecondary mb-10 text-center text-white bg-purpleSecondary cursor-pointer'
                    : 'w-1/2 h-auto py-1 px-1 rounded-md border-2 border-purpleSecondary mb-10 text-center text-purpleSecondary bg-white cursor-pointer'
                }
              >
                {schedule?.day_of_week}
              </span>
            ))}

            <p>Horario: </p>

            {user?.schedules?.map((schedule, index) =>
              selectDay === schedule?.day_of_week ? (
                <span
                  key={index}
                  onClick={() =>
                    handleSelectHour({
                      startTime: schedule?.start_time,
                      endTime: schedule?.end_time,
                    })
                  }
                  className={
                    selectHour?.startTime === schedule?.start_time
                      ? 'w-1/1 h-auto py-1 px-1 rounded-md border-2 border-purpleSecondary mb-10 text-center text-white bg-purpleSecondary cursor-pointer'
                      : 'w-1/1 h-auto py-1 px-1 rounded-md border-2 border-purpleSecondary mb-10 text-center text-purpleSecondary bg-white cursor-pointer'
                  }
                >
                  {schedule?.start_time + ' - ' + schedule?.end_time}
                </span>
              ) : null
            )}

            <button
              id='exchangeBtn'
              className='bg-yellowPrimary px-4 py-2 mx-auto text-purplePrimary rounded-3xl w-full'
              onClick={handleMeeting}
            >
              Hacer intercambio
            </button>
          </div>
        </div>
      </div>
      {openModal && <EditModal modalState={handleModal} />}
    </div>
  );
}

export default UserProfileCard;
