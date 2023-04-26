import Banner from "@/components/Banner"
import Header from "@/components/Header"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import Footer from "@/components/Footer"
import React, { useRef, useState, forwardRef } from "react"

export type Section = "home" | "about" | "projects" | "contact";

export default function Home() {
  const mainRef: React.ForwardedRef<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const homeRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const [section, setSection] = useState<Section>("home");

  return (
    <main ref={homeRef} className={`h-fit w-screen `} >
      <Banner mainRef={mainRef} />
      <MainContent homeRef={homeRef} ref={mainRef} />
    </main>
  )
}

const MainContent = forwardRef(({ homeRef }: { homeRef: React.ForwardedRef<HTMLElement> }, ref: React.ForwardedRef<HTMLDivElement>) => {
  const aboutRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const projectsRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const contactRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);

  return (
    <div ref={ref} className={`h-fit`}>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
})