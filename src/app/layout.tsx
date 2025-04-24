import { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";

// app/layout.tsx
export const metadata = {
  title: 'My Site',
  description: 'A custom base layout',
};

export default function RootLayout({children} : {children: ReactNode}) {
  return (
    <html lang="en">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Personal Portfolio</title>
      </head>
      <body>
          <Header />
          <main>{children}</main>
          <footer>Narish Kumar Dey ©2025</footer>
      </body>
    </html>
  );
}