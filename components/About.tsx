import { Dispatch, SetStateAction, forwardRef, useEffect, useRef } from "react";
import Skill from "./shared-ui/Skill";
import { ISkill } from "./shared-ui/Skill";
import { Section } from "@/pages";
import Image from "next/image";


const skillList: Array<ISkill> = [
    {name: "HTML", image: "HTML.svg"}, 
    {name: "CSS", image: "CSS.svg"}, 
    {name: "JavaScript", image: "JavaScript.svg"}, 
    {name: "TypeScript", image: "TypeScript.svg"}, 
    {name: "React.js", image: "React.svg"}, 
    {name: "Next.js", image: "next.svg"}, 
    {name: "Sass", image: "Sass.svg"}, 
    {name: "Tailwind", image: "Tailwind.svg"}, 
    {name: "Jest", image: "jest.svg"}, 
    {name: "React Testing Library", image: "testing-library.svg"}, 
    {name: "Git/Github", image: "Github.svg"}, 
    {name: "Java", image: "Java.svg"}
    ]


export const About = forwardRef(function({ setSection }: { setSection: Dispatch<SetStateAction<Section>> }, ref: React.ForwardedRef<HTMLElement>) {

    return (
        <section ref={ref} className={`h-fit min-h-screen flex flex-col px-4 mb-12 md:mb-6 scroll-mt-16`}>
            <h3 className={`text-3xl font-extrabold flex justify-center items-center`}>About</h3>
            <div className={`flex flex-col flex-1 md:flex-row md:justify-around mt-12`}>
                <AboutMe setSection={setSection} />
                <Skills />
            </div>
        </section>
    )
})

function AboutMe({setSection}: { setSection: Dispatch<SetStateAction<Section>> }) {
    const aboutMeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setSection("about")
        }, {
            threshold: 0.7
        })
        observer.observe(aboutMeRef.current!)
        return () => observer.disconnect()
    }, [])

    return (
        <div className={`flex flex-col justify-center items-center md:w-1/2`} ref={aboutMeRef}>
            <div className={`h-64 w-64 md:h-72 md:w-72 relative mb-6`}>
                <Image fill src={`/static/assets/profile.png`} alt="profile image" />
            </div>
            <p className={`text-center text-lg md:w-4/6`}>
                I am a self-taught front end engineer, with a passion for building and innovation. Fully committed to the philosophy of life-long learning, I am constantly learning new things, and eagerly applying those things to a new project, only to start the process again. For me, it&apos;s the endless possibilities of web development and technology that drives my excitement and passion. Whether on a team, or working solo, I always bring that passion to whatever projects I am a part of. When I&apos;m not at my computer I like to spend my time reading, strength training, playing guitar, or playing videogames.
            </p>
        </div>
    )
}

function Skills() {

    return (
        <div className={`md:w-1/2 flex justify-center items-center`}>
            <div className={`md:w-4/6 grid grid-cols-3 gap-2 md:gap-y-8 md:gap-x-0 pt-16`}>
                {skillList.map((skill: ISkill, i: number) => (
                    <Skill idx={i} key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    )
}