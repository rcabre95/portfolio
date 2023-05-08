import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Section } from "@/pages";
import Image from "next/image";

export default function Banner({ aboutRef, setSection }: { aboutRef: any, setSection: Dispatch<SetStateAction<Section>> }) {
    const bannerRef = useRef<HTMLElement>(null);

    const scrollToMain = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(() => {
            setSection("home")
        }, { threshold: 1 })
        observer.observe(bannerRef.current!)

        return () => { observer.disconnect() }
    }, [setSection])

    return (
        <section ref={bannerRef} className={`h-screen w-screen flex flex-col justify-center items-center bg-myBlue relative`}>
            <div className="z-20 text-4xl md:text-5xl text-center mb-2">
                <h1>Hi, I&apos;m <span className="text-myBrown">Raphael</span>.<br />I&apos;m a front end web developer.</h1>
            </div>
            <button onClick={scrollToMain} className="z-20 w-fit h-10 border-2 border-slate-400 flex justify-center items-center p-2 rounded-md transition duration-200 hover:scale-125 hover:border-myBrown">
                Explore <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13 13.586V8h-2v5.586l-2.293-2.293-1.414 1.414L12 17.414l4.707-4.707-1.414-1.414L13 13.586z"/></svg> 
            </button>
            {/* <div className={`z-10 absolute h-full w-full inset-0 overflow-hidden`}>
                <div className="relative h-full w-full">

                    <div className="h-1/6 w-44 absolute top-64 left-2 md:h-1/2 md:w-1/2 
                    md:top-28">
                        <Image fill src={`/static/assets/cloud.svg`} alt={`cloud`} />
                    </div>
                    <div className="h-1/6 w-44 absolute top-1/2 right-4 md:h-1/2 md:w-1/2 md:top-1/3">
                        <Image fill src={`/static/assets/cloud.svg`} alt={`cloud`} />
                    </div>
                </div>
            </div> */}
        </section>
    )
}