import './globals.css';
import { DM_Sans } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Effects from '../components/Effects';

const dm = DM_Sans({ subsets: ['latin'], variable: '--font-dm', display: 'swap' });

export const metadata = {
  title: { default: 'Janvi Vaghasiya — Lead UX/UI Designer', template: '%s — Janvi Vaghasiya' },
  description: 'Lead UX/UI Designer with 5+ years designing mobile apps, websites, dashboards and design systems.',
  openGraph: {
    title: 'Janvi Vaghasiya — Lead UX/UI Designer',
    description: 'Simple, intuitive digital experiences across mobile apps, websites and dashboards.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dm.variable} data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <div className="progress" id="progress" />
        <div className="cursor" id="cursor" aria-hidden="true" />
        <Nav />
        {children}
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
