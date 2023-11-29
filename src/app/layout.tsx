import './globals.css';

import { Analytics } from '@vercel/analytics/react';
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
  title: '훕치치!',
  description: '한국외대 스포츠 경기 플랫폼',
  icons: {
    icon: '/icon_hufscheer.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-auto max-w-md`}>
        <ReactQueryProvider>
          <Header />
          <main className="px-4">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
