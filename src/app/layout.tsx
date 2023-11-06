import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const inter = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

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
      <body className={`${inter.className} max-w-md m-auto bg-slate-50 p-4`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
