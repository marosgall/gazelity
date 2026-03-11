import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-white-100 shadow-2xl pt-28 md:pt-36 pb-12 md:pb-20"
    >
      <div className="text-center px-6">
        <Image
          src="/logo.png"
          alt="Gazelity Logo"
          width={500}
          height={500}
          className="mx-auto w-55 sm:w-70 md:w-105 lg:w-125 h-auto"
          priority
        />
      </div>

      <div className="text-center max-w-3xl mx-auto px-6 mt-8 md:mt-10">
        <h3 className="text-base sm:text-lg md:text-xl leading-relaxed">
          Sme komunita ľudí, ktorí sa chcú hýbať ľahko ako gazela, no každý svojím vlastným tempom.
        </h3>

        <p className="text-base sm:text-lg text-gray-700 pt-8 md:pt-10 pb-6 md:pb-10 leading-relaxed">
          Nie je to len tréningový plán. Je to spôsob, ako objaviť radosť z pohybu, zlepšiť sa a patriť do komunity, ktorá beží rovnakým smerom.
        </p>
      </div>
    </section>
  )
}