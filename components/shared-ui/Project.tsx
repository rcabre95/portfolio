
export interface IProject {
    title: string;
    link: string;
    gitLink: string;
    image: string;
}

export default function Project({ project }: { project: IProject }) {

    return (
        <div className={``}>
            <pre>{JSON.stringify(project)}</pre>
        </div>
    )
}