export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-white shadow-2xl py-16 md:py-24 scroll-mt-20"
    >
      <div className="text-center max-w-3xl mx-auto px-6">

        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter mb-4">
            GAZELITY = GAZELA + DIVERSITY
          </h2>

          {/* divider */}
          <div className="w-32 md:w-156 h-1 bg-red-600 mx-auto"></div>
        </div>

        <p className="text-base md:text-lg text-gray-700 py-2 leading-relaxed">
          Gazelity predstavuje spojenie dvoch myšlienok – ľahkosti a rýchlosti gazely a rozmanitosti ľudí, ktorí sa rozhodli hýbať.
        </p>

        <p className="text-base md:text-lg text-gray-700 py-2 leading-relaxed">
          <em>Gazela</em> je symbolom prirodzeného pohybu, elegancie a vytrvalosti. Neznamená len rýchlosť, ale aj schopnosť pohybovať sa efektívne, ľahko a s rešpektom k vlastnému telu.
        </p>

        <p className="text-base md:text-lg text-gray-700 py-2 leading-relaxed">
          Slovo <em>diversity</em> vyjadruje, že v komunite Gazelity má miesto ktokoľvek, či už naháňaš osobné rekordy alebo beháš pre zdravie. Každý má vlastnú cestu, ale všetkých spája pohyb.
        </p>

      </div>
    </section>
  )
}