import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import ReactQueryProvider from './ReactQueryProvider';

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
      <body className={`${inter.className} m-auto max-w-md bg-slate-50`}>
        <ReactQueryProvider>
          <Header />
          <main className="p-4">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
