import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Section } from "@/pages";

export default function Banner({ aboutRef, setSection }: { aboutRef: any, setSection: Dispatch<SetStateAction<Section>> }) {
    const bannerRef = useRef<HTMLElement>(null);

    const scrollToMain = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entry) => {
            setSection("home")
        }, { threshold: 0.5 })
        observer.observe(bannerRef.current!)

        return () => { observer.disconnect() }
    }, [])

    return (
        <section ref={bannerRef} className={`h-screen w-screen flex flex-col justify-center items-center bg-myBlue`}>
            <div className="text-4xl md:text-5xl text-center mb-2">
                <h1>Hi, I&apos;m <span className="text-myBrown">Raphael</span>.<br />I&apos;m a front end web developer.</h1>
            </div>
            <button onClick={scrollToMain} className="w-fit h-10 border-2 border-slate-400 flex justify-center items-center p-2 rounded-md">
                Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13 13.586V8h-2v5.586l-2.293-2.293-1.414 1.414L12 17.414l4.707-4.707-1.414-1.414L13 13.586z"/></svg> 
            </button>
        </section>
    )
}