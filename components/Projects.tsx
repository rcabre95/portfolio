import Project, { IProject } from "./shared-ui/Project"

const myProjects: Array<IProject> = [
    { title: "Leslie's Accounting Services", link: "https://accountant-site.vercel.app/", gitLink: "https://github.com/rcabre95/accountant-business-site", image: "" },
    { title: "Firebase Blog App", link: "https://firebase-app-seven.vercel.app/", gitLink: "https://github.com/rcabre95/firebase-app/", image: "" },
    { title: "10 Cats", link: "https://10-cats.vercel.app/", gitLink: "https://github.com/rcabre95/image-carousel/", image: "" },
] 

export default function Projects() {
    
    return (
        <section className={`h-screen`}>
            {myProjects.map((project: IProject) => (
                <Project key={project.title} project={project} />
            ))}
        </section>
    )
}