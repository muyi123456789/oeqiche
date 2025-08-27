"use client"
import '../public/antd.min.css'; // 添加这行
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StyleProvider } from '@ant-design/cssinjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* 其他 meta 可选 */}
      </head>
      <body>
        <StyleProvider hashPriority="high">
          <Header />
          <main className='main'>{children}</main>
          <Footer />
        </StyleProvider>
      </body>
    </html>
  );
}
