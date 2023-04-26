
export interface IProject {
    title: string;
    link: string;
    gitLink: string;
    image: string;
}

export default function Project({ project }: { project: IProject }) {
    var path = require('path');
    const imageDirectory = path.resolve(process.cwd(), "public/static/assets/projects/");

    return (
        <div className={``}>
            <pre>{JSON.stringify(project.title)}</pre>
            <pre>{JSON.stringify(project.link)}</pre>
            <pre>{JSON.stringify(project.gitLink)}</pre>
            <pre>{`${imageDirectory}${project.image}`}</pre>
        </div>
    )
}