import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Products from "@/components/Products"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Partners from "@/components/Partners"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Partners />
      <Contact />
    </>
  )
}