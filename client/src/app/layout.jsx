import ReduxProvider from '@/store/ReduxProvider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SKILL SWAP',
  description: 'Intercambia Habilidades',
};
export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <ReduxProvider>
          <div className='flex flex-col min-h-screen'>
            <main className='flex-grow'>
              <div className='mx-auto'>{children}</div>
            </main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
