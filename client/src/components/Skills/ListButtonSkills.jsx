'use client';
import { addToLearn, addToTeach } from '@/store/slices/skillsSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const ListButtonSkills = ({ option, key, pathname }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const addSkill = (option, pathname) => {
    if (pathname === 'aprender') {
      dispatch(addToLearn(option));
      //aqui deberia ir el consumo del endpoint
      router.push('/home');
    } else if (pathname === 'ensenar') {
      dispatch(addToTeach(option));
      router.push('/habilidad/aprender');
    }
  };
  return (
    <>
      {option === 'Otros' ? (
        <div key={key} className='col-span-1'>
          <Link
            href={'/habilidad/otros'}
            className='text-center w-full py-3 rounded bg-white border-purplePrimary border-2 text-purpleSecondary'
            type='button'
          >
            {option}
          </Link>
        </div>
      ) : (
        <div key={key} className='col-span-1'>
          <button
            className='w-full py-3 rounded bg-white border-purplePrimary border-2 text-purpleSecondary'
            type='button'
            onClick={() => {
              addSkill(option, pathname);
            }}
          >
            {option}
          </button>
        </div>
      )}
    </>
  );
};

export default ListButtonSkills;
