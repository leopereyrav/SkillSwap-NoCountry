export const metadata = {
  title: 'Habilidades',
};

export default function layoutHabilidades({ children }) {
  return (
    <div className='h-screen flex justify-center items-center bg-purpleSecondary p-2'>
      <div className='rounded-3xl bg-purpleThirty w-auto  md:w-2/3 h-4/5 p-3'>
        {children}
      </div>
    </div>
  );
}
