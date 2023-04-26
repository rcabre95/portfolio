import Banner from "@/components/Banner"
import Header from "@/components/Header"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import Footer from "@/components/Footer"
import React, { useRef, useState, forwardRef, Dispatch, SetStateAction } from "react"

export type Section = "home" | "about" | "projects" | "contact";

export default function Home() {

  const mainRef: React.ForwardedRef<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const homeRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const [section, setSection] = useState<Section>("home");

  return (
    <main ref={homeRef} className={`h-fit w-screen `} >
      <Banner setSection={setSection} mainRef={mainRef} />
      <MainContent setSection={setSection} section={section} homeRef={homeRef} ref={mainRef} />
    </main>
  )
}

const MainContent = forwardRef(({ section, homeRef, setSection }: { section: string, homeRef: React.ForwardedRef<HTMLElement>, setSection: Dispatch<SetStateAction<Section>> }, ref: React.ForwardedRef<HTMLDivElement>) => {

  const aboutRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const projectsRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const contactRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);

  return (
    <div ref={ref} className={`h-fit`}>
      <Header section={section} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About setSection={setSection} ref={aboutRef} />
      <Projects setSection={setSection} ref={projectsRef} />
      <Contact setSection={setSection} ref={contactRef} />
      <Footer />
    </div>
  )
})