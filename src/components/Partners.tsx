import Image from "next/image"

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-white shadow-2xl scroll-mt-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter mb-4">
            Partneri
          </h2>

          {/* divider */}
          <div className="w-32 md:w-56 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* LOGOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">

          <a href="https://www.leitnersport.sk" target="_blank" rel="noopener noreferrer">
            <Image
              src="/partners/leitner_sport_logo.png"
              alt="Partner 1"
              width={300}
              height={200}
              className="h-12 md:h-16 w-auto opacity-100 hover:opacity-70 transition"
            />
          </a>

          <a href="https://www.brezno.sk" target="_blank" rel="noopener noreferrer">
            <Image
              src="/partners/8.jpg"
              alt="Partner 2"
              width={200}
              height={100}
              className="h-12 md:h-16 w-auto opacity-100 hover:opacity-70 transition"
            />
          </a>

          <Image
            src="/partners/craft_logo.png"
            alt="Partner 3"
            width={200}
            height={200}
            className="h-12 md:h-16 w-auto"
          />
        </div>
      </div>
    </section>
  )
}