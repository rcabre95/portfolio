import Skill from "./shared-ui/Skill"

const skillList: Array<string> = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Sass", "Tailwind", "Jest", "React Testing Library", "Git/Github", "Java"]


export default function About() {

    return (
        <section className={`min-h-fit h-screen flex flex-col`}>
            <AboutMe />
            <Skills />
        </section>
    )
}

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
                {skillList.map((skill: string) => (
                    <Skill key={skill} skill={skill} />
                ))}
            </div>
        </div>
    )
}