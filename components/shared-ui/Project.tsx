
export interface IProject {
    title: string;
    link: string;
    gitLink: string;
    image: string;
}

export default function Project({ project }: { project: IProject }) {

    return (
        <div className={``}>
            <pre>{JSON.stringify(project.title)}</pre>
            <pre>{JSON.stringify(project.link)}</pre>
            <pre>{JSON.stringify(project.gitLink)}</pre>
            <pre>{JSON.stringify(project.image)}</pre>
        </div>
    )
}