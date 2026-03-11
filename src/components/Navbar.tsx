import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="fixed w-full h-20 bg-[#006BFF] flex items-center md:px-10 z-50 drop-shadow-2xl">

      {/* MOBILE LOGO */}
      <div className="w-full flex md:hidden">
        <a href="#">
          <Image
          src="/heading.png"
          alt="Gazelity"
          width={200}
          height={60}
        />
        </a>

        <Image
        src="/gazelita_whitebg.png"
        alt="Gazelity"
        width={80}
        height={120}
        className="absolute right-5 top-17.5 -translate-y-1/2"
      />
      </div>

      

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-10 items-center text-white text-xl text-shadow-lg font-heading tracking-tighter uppercase">
        <a href="#" className="hover:opacity-60 transition">Domov</a>
        <a href="#about" className="hover:opacity-60 transition">O nás</a>
        <a href="#products" className="hover:opacity-60 transition">Produkty</a>
        <a href="#partners" className="hover:opacity-60 transition">Partneri</a>
        <a href="#contact" className="hover:opacity-60 transition">Kontakt</a>
      </div>

      {/* DESKTOP LOGO */}
      <Image
        src="/gazelita_whitebg.png"
        alt="Gazelity"
        width={120}
        height={120}
        className="hidden md:block absolute right-10 top-17.5 -translate-y-1/2"
      />

    </nav>
  )
}