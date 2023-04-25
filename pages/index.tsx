import Banner from "@/components/Banner"
import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { useState } from "react"

export type Section = "home" | "about" | "projects" | "contact";

export default function Home() {
  const [section, setSection] = useState<Section>("home");

  return (
    <main
      className={`h-fit w-screen `}
    >
      <Banner/>
      <MainContent />
    </main>
  )
}

function MainContent() {

  return (
    <div className={`h-fit`}>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}