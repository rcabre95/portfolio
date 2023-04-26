import { forwardRef } from "react"
import Project, { IProject } from "./shared-ui/Project"

const myProjects: Array<IProject> = [
    { title: "Leslie's Accounting Services", link: "https://accountant-site.vercel.app/", gitLink: "https://github.com/rcabre95/accountant-business-site", image: "las.png" },
    { title: "Firebase Blog App", link: "https://firebase-app-seven.vercel.app/", gitLink: "https://github.com/rcabre95/firebase-app/", image: "firebase_app.png" },
    { title: "10 Cats", link: "https://10-cats.vercel.app/", gitLink: "https://github.com/rcabre95/image-carousel/", image: "10_cats.png" },
    { title: "Hashtables", link: "", gitLink: "https://github.com/rcabre95/hashtables", image: "hashtables.png"}
] 

export const Projects = forwardRef((props, ref: React.ForwardedRef<HTMLElement>) => {
    
    return (
        <section ref={ref} className={`h-screen`}>
            {myProjects.map((project: IProject) => (
                <Project key={project.title} project={project} />
            ))}
        </section>
    )
})