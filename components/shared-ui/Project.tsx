
export interface IProject {
    title: string;
    link: string;
    gitLink: string;
    image: string;
}

export default function Project({ project }: { project: IProject }) {

    return (
        <div className={``}>
            <pre className={`text-xs`}>{project.title}</pre>
            <pre className={`text-xs`}>{project.link}</pre>
            <pre className={`text-xs`}>{project.gitLink}</pre>
            <pre className={`text-xs`}>{`public/static/assets/projects/${project.image}`}</pre>
        </div>
    )
}