import { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// app/layout.tsx
export const metadata = {
  title: 'Narish Kumar Dey - Portfolio',
  description: 'A website that acts as my portfolio!',
};

export default function RootLayout({children} : {children: ReactNode}) {

  return (
    <html lang="en">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Narish Kumar Dey - Portfolio</title>
      </head>
      <body>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
