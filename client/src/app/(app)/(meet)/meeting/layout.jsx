import SideBar from '@/components/HomePage/SideBar';

export default function AppLayout({ children }) {
  return (
    <main className='min-h-screen flex flex-row  bg-white font-semibold'>
      <div className='bg-purpleThirty mx-auto flex-shrink-0 pt-10 shadow-xl'>
        <SideBar show={'home'} />
      </div>
      {children}
    </main>
  );
}
