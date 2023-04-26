import { forwardRef } from "react";
import Skill from "./shared-ui/Skill";
import { ISkill } from "./shared-ui/Skill";


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


export const About = forwardRef(function(props, ref: React.ForwardedRef<HTMLElement>) {

    return (
        <section ref={ref} className={`min-h-fit h-screen flex flex-col`}>
            <AboutMe />
            <Skills />
        </section>
    )
})

function AboutMe() {

    return (
        <div>
            <h3>About Me</h3>
            <p>
                I am a self-taught front end engineer, with a passion for building and innovation. Fully committed to the philosophy of life-long learning, I am constantly learning new things, and eagerly applying those things to a new project, only to start the process again. For me, it&apos;s the endless possibilities of web development and technology that drives my excitement and passion. Whether on a team, or working solo, I always bring that passion to whatever projects I am a part of. When I&apos;m not at my computer I like to spend my time reading, strength training, playing guitar, or playing videogames.
            </p>
        </div>
    )
}

function Skills() {

    return (
        <div>
            <h3>Skills</h3>
            <div>
                {skillList.map((skill: ISkill) => (
                    <Skill key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    )
}