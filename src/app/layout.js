import './globals.css';
import { Inter } from 'next/font/google';
import ThemeRegistry from '../theme/ThemeRegistry'; // <-- IMPORT

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CashKaro',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* WRAP CHILDREN WITH THE REGISTRY */}
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}