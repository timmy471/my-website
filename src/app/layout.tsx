import './globals.css';
import meta from '../meta';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-950 dark:text-white'>
          <Navbar />
          <div className='flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
