import Footer from "@/components/footer";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";

const formLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSf9MA8uPOA9grjrOyeSnh9R5ttOxTKHIsXAZM0UlLIKm-RgaQ/viewform?usp=sf_link";

export default function Home() {
  return (
    <main className="flex min-h-screen text-gray flex-col items-center justify-between bg-white">
      <section
        id="hero"
        className="h-full relative w-screen flex gap-8 flex-col items-center justify-start py-24 bg-gradient-to-b from-[#BFFFC6] to-[#00DC72]"
      >
        <Image
          alt="Logomarca omanutech"
          src={"/svg/omanutech.svg"}
          width={146}
          height={146}
        />

        <div className="flex flex-col items-center justify-center">
          <Image
            alt="Yoshi"
            src={"/images/dino.png"}
            width={344}
            height={360}
          />

          <div className="flex flex-col font-semibold -mb-36 items-center justify-center gap-2 -mt-40 z-20 bg-mock bg-no-repeat bg-contain w-full h-[450px]">
            <h1 className="text-4xl font-semibold -mt-24">
              GRAN<span className="text-main">PIX</span>
            </h1>
            <hr className="text-gray/10 w-3/5 h-[1px]" />
            <p>Uma realização</p>
            <h2>Omanu.tech</h2>
            <hr className="text-gray/10 w-3/5 h-[1px]" />
            <p>Juntamente com</p>
            <Image
              alt="Logomarca starttec"
              src={"/svg/starttec.svg"}
              width={106}
              height={41}
            />
          </div>

          <a
            href={formLink}
            className="bg-[#19E07D] flex flex-row items-center gap-2 text-white animate-pulse font-semibold border-[2px] z-40 mr-2 border-white px-6 py-4 rounded-xl"
          >
            Participar
            <ArrowRight />
          </a>
        </div>

        <Image
          alt="bolha 1"
          src={"/svg/buble.svg"}
          width={60}
          height={60}
          className="absolute -left-4 top-12"
        />
        <Image
          alt="bolha 1"
          src={"/svg/buble.svg"}
          width={133}
          height={133}
          className="absolute -right-6 -top-6"
        />
        <Image
          alt="bolha 1"
          src={"/svg/buble.svg"}
          width={156}
          height={156}
          className="absolute -bottom-4 -left-12"
        />
      </section>

      <section className="flex min-h-screen flex-col items-center text-center justify-start pt-12 gap-6 w-full bg-white px-[5%]">
        <h2 className="text-2xl font-semibold text-center">
          É hora de <br /> <span className="text-main">correr paizaum!!</span>
        </h2>

        <div className="flex rounded-xl bg-[#F9F9F9] w-full py-8 items-center justify-around">
          <Image
            alt="Ícone de coroa"
            width={51}
            height={51}
            src={"/svg/crown.svg"}
          />
          <div className="flex flex-col items-start">
            <p className="text-xs">Rank</p>
            <p className="font-semibold">120</p>
          </div>

          <div className="bg-gray/10 w-[1px] h-[50px]" />

          <Image
            alt="Ícone de coroa"
            width={51}
            height={51}
            src={"/svg/star.svg"}
          />
          <div className="flex flex-col items-start">
            <p className="text-xs">Pontos</p>
            <p className="font-semibold">2.301</p>
          </div>
        </div>

        <Image
          alt="bolha 1"
          src={"/images/kart.png"}
          width={254}
          height={266}
        />

        <h3 className="text-2xl font-semibold text-center">
          Inscreva-se <span className="text-main">agora!</span>
        </h3>

        <p className="text-xs">
          Clique no botão abaixo para participar da seleção!
        </p>

        <div className="flex gap-0">
          <Image
            alt="bolha 1"
            src={"/images/karts.png"}
            width={323}
            height={94}
          />
        </div>

        <a
          href={formLink}
          className="bg-[#19E07D] flex flex-row items-center gap-2 text-gray font-semibold border-[2px] z-40 border-white px-6 py-4 rounded-xl"
        >
          Participar
          <ArrowRight />
        </a>
      </section>

      <Footer />
    </main>
  );
}
