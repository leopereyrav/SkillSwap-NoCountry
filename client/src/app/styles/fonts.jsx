import { Koulen, Carrois_Gothic_SC, Carrois_Gothic, Montserrat } from 'next/font/google';

const koulen = Koulen({ subsets: ['latin'], weight: '400', display: 'block' });
const gothicSc = Carrois_Gothic_SC({ subsets: ['latin'], weight: '400', display: 'block' });
const gothic = Carrois_Gothic({ subsets: ['latin'], weight: '400', display: 'block' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400','500','600','700','800','900'], display: 'block' });

export { koulen, gothic, gothicSc, montserrat }
