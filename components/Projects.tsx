import { Dispatch, SetStateAction, forwardRef, useEffect, useRef } from "react"
import Project, { IProject } from "./shared-ui/Project"
import { Section } from "@/pages";

const myProjects: Array<IProject> = [
    { title: "Leslie's Accounting Services", link: "https://accountant-site.vercel.app/", gitLink: "https://github.com/rcabre95/accountant-business-site", image: "las.png" },
    { title: "Firebase Blog App", link: "https://firebase-app-seven.vercel.app/", gitLink: "https://github.com/rcabre95/firebase-app/", image: "firebase_app.png" },
    { title: "10 Cats", link: "https://10-cats.vercel.app/", gitLink: "https://github.com/rcabre95/image-carousel/", image: "10_cats.png" },
    { title: "Hashtables", link: "", gitLink: "https://github.com/rcabre95/hashtables", image: "hashtables.png"}
] 

export const Projects = forwardRef(({ setSection }: { setSection: Dispatch<SetStateAction<Section>> }, ref: React.ForwardedRef<HTMLElement>) => {

    const projectsRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setSection("projects");
            }, { threshold:0.5 }
        )
        observer.observe(projectsRef.current!)
        return () => observer.disconnect()
    }, []);

    return (
        <section ref={ref} className={`h-screen`}>
            <div ref={projectsRef}>
                {myProjects.map((project: IProject) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
        </section>
    )
})