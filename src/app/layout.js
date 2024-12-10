import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/b6a2efae6b.js" crossOrigin="anonymous"></script>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 flex flex-col min-h-[100vh] items-center text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}