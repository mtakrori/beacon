import type { Metadata } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import WhatsAppButton from '@/components/common/WhatsAppButton';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Beacon | Luxury Lighting & Home Decor',
  description: 'Curated gallery of luxury lighting and space design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
