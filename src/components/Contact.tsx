import { Mail, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-end bg-gray-100 py-16 md:py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto w-full px-6 pb-16">

        {/* TITLE */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter mb-4">
            Kontakt
          </h1>

          <div className="w-32 md:w-56 h-1 bg-red-600 mx-auto"></div>

          <p className="text-gray-600 py-2 text-base md:text-lg">
            Ak máš otázky alebo záujem o spoluprácu, napíš nám.
          </p>
        </div>

        {/* CONTACT LINKS */}
        <div className="flex flex-col items-center gap-6 text-lg">

          <a
            href="mailto:gazelity@gmail.com"
            className="flex items-center gap-3 text-red-600 hover:opacity-70 transition"
          >
            <Mail size={22} />
            gazelity@gmail.com
          </a>

          <a
            href="https://instagram.com/gazelity_bezecka_komunita"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-red-600 hover:opacity-70 transition"
          >
            <Instagram size={22} />
            @gazelity_bezecka_komunita
          </a>

        </div>

        {/* FOOTER LINE */}
        <div className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gazelity
        </div>

      </div>
    </section>
  )
}