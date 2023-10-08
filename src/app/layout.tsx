import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HUFStreaming',
  description: '한국외대 스포츠 경기 중계 플랫폼',
  icons: {
    icon: '/icon_hufstreaming.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-sm m-auto bg-slate-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
