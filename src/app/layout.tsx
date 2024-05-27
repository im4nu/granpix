import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`md:hidden overflow-x-hidden md:opacity-0 md:h-none md:w-none ${inter.className}`}
      >
        {children}
      </body>

      <main
        className={`hidden overflow-x-hidden absolute top-0 md:flex w-screen h-screen items-center justify-center bg-gradient-to-b from-[#BFFFC6] to-[#00DC72] ${inter.className}`}
      >
        <div className="flex flex-col bg-white rounded-xl px-12 w-fit text-center py-6 gap-6 items-center">
          <h1 className="text-3xl">
            Ei paizaum,{" "}
            <span className="text-main">aqui num é CBLOL não!!!</span>
          </h1>
          <Image
            alt="meme"
            src={"/images/zoio.jpeg"}
            width={300}
            height={168}
            className="rounded-xl"
          />
          <p className="w-4/5">Esse site só roda em celular {`:)`}</p>
          <p className="w-4/5">
            Cuida, aperta f12 e vê na resolução de celular!!!!
          </p>
        </div>
      </main>
    </html>
  );
}
