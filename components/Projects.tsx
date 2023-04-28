import { Dispatch, SetStateAction, forwardRef, useEffect, useRef } from "react"
import Project, { IProject } from "./shared-ui/Project"
import { Section } from "@/pages";

const myProjects: Array<IProject> = [
    { title: "Leslie's Accounting Services", link: "https://accountant-site.vercel.app/", gitLink: "https://github.com/rcabre95/accountant-business-site", image: "las.png", description: "nunc id cursus metus aliquam eleifend mi in nulla posuere" },
    { title: "Firebase Blog App", link: "https://firebase-app-seven.vercel.app/", gitLink: "https://github.com/rcabre95/firebase-app/", image: "firebase_app.png", description: "nunc id cursus metus aliquam eleifend mi in nulla posuere" },
    { title: "10 Cats", link: "https://10-cats.vercel.app/", gitLink: "https://github.com/rcabre95/image-carousel/", image: "10_cats.png", description: "nunc id cursus metus aliquam eleifend mi in nulla posuere" },
    { title: "Hashtables", link: "", gitLink: "https://github.com/rcabre95/hashtables", image: "hashtables.png", description: "nunc id cursus metus aliquam eleifend mi in nulla posuere" }
] 

export const Projects = forwardRef(({ setSection }: { setSection: Dispatch<SetStateAction<Section>> }, ref: React.ForwardedRef<HTMLElement>) => {

    const projectsRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setSection("projects");
            }, { threshold: 0.5 }
        )
        observer.observe(projectsRef.current!)
        return () => observer.disconnect()
    }, []);

    return (
        <section ref={ref} className={`h-fit w-full flex flex-col items-center bg-myBlue scroll-mt-16`}>
            <h3 className={`text-3xl font-extrabold flex justify-center items-center mb-10`}>Projects</h3>
            <div className={`w-full p-8 flex flex-wrap items-center justify-center md:bg-myBlue md:rounded-lg md:shadow-lg md:border-2 md:border-white md:w-4/6`}  ref={projectsRef}>
                {myProjects.map((project: IProject, i: number) => (
                    <Project key={project.title} project={project} idx={i} />
                ))}
            </div>
        </section>
    )
})