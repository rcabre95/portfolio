import Banner from "@/components/Banner"
import Header from "@/components/Header"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import ToTopButton from "@/components/ToTopButton"
import Footer from "@/components/Footer"
import MetaTags from "@/components/shared-ui/MetaTags"
import React, { useRef, useState, forwardRef, Dispatch, SetStateAction } from "react"

export type Section = "home" | "about" | "projects" | "contact";

export default function Home() {

  const mainRef: React.ForwardedRef<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const homeRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  
  const [section, setSection] = useState<Section>("home");

  return (
    <main ref={homeRef} className={`h-fit w-screen relative`} >
      <Banner setSection={setSection} aboutRef={mainRef} />
      <MainContent setSection={setSection} section={section} homeRef={homeRef} ref={mainRef} />
      <ToTopButton homeRef={homeRef} />
      <Footer />
    </main>
  )
}

const MainContent = forwardRef(({ section, homeRef, setSection }: { section: string, homeRef: React.ForwardedRef<HTMLElement>, setSection: Dispatch<SetStateAction<Section>> }, ref: React.ForwardedRef<HTMLDivElement>) => {

  const aboutRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const projectsRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const contactRef: React.ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);

  return (
    <div ref={ref} className={`h-fit`}>
      <MetaTags title="Raphael Cabrera" description="Raphael's developer portfolio" pageUrl={process.env.NEXT_PUBLIC_HOME_URL!} imgUrl="/static/assets/logo.png"/>
      <Header section={section} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About setSection={setSection} ref={aboutRef} />
      <Projects setSection={setSection} ref={projectsRef} />
      <Contact setSection={setSection} ref={contactRef} />
    </div>
  )
})