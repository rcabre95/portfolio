import Banner from "@/components/Banner"
import Image from "next/image"
import Header from "@/components/Header"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import ToTopButton from "@/components/ToTopButton"
import Footer from "@/components/Footer"
import MetaTags from "@/components/shared-ui/MetaTags"
import { useRef, useState, forwardRef, ForwardedRef, Dispatch, SetStateAction } from "react"

export type Section = "home" | "about" | "projects" | "contact";

export default function Home() {

  const mainRef: ForwardedRef<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const homeRef: ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  
  const [section, setSection] = useState<Section>("home");

  return (
    <main ref={homeRef} className={`h-fit w-screen relative`} >
      <div className={`z-10 fixed h-full w-full inset-0 overflow-hidden`}>
                <div className="relative h-full w-full">

                    <div className="h-1/6 w-44 absolute top-64 left-2 md:h-1/2 md:w-1/2 
                    md:top-16">
                        <Image fill src={`/static/assets/cloud.svg`} alt={`cloud`} />
                    </div>
                    <div className="h-1/6 w-44 absolute top-1/2 right-4 md:h-1/2 md:w-1/2 md:top-1/3">
                        <Image fill src={`/static/assets/cloud.svg`} alt={`cloud`} />
                    </div>
                </div>
      </div>
      <Banner setSection={setSection} aboutRef={mainRef} />
      <MainContent setSection={setSection} section={section} homeRef={homeRef} ref={mainRef} />
      <ToTopButton homeRef={homeRef} />
      <Footer />
    </main>
  )
}

const MainContent = forwardRef(({ section, homeRef, setSection }: { section: string, homeRef: ForwardedRef<HTMLElement>, setSection: Dispatch<SetStateAction<Section>> }, ref: ForwardedRef<HTMLDivElement>) => {

  const aboutRef: ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const projectsRef: ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);
  const contactRef: ForwardedRef<HTMLElement> = useRef<HTMLElement>(null);

  return (
    <div ref={ref} className={`h-fit relative`}>
      <MetaTags title="Raphael Cabrera" description="Raphael's developer portfolio" pageUrl={process.env.NEXT_PUBLIC_HOME_URL!} imgUrl="/static/assets/logo.png"/>
      <Header section={section} homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About setSection={setSection} ref={aboutRef} />
      <Projects setSection={setSection} ref={projectsRef} />
      <Contact setSection={setSection} ref={contactRef} />
    </div>
  )
})