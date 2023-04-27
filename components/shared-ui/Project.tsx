import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export interface IProject {
    title: string;
    link: string;
    gitLink: string;
    image: string;
    description: string;
}

export default function Project({ project, idx }: { project: IProject, idx: number }) {
    const { title, link, gitLink, image, description } = project;

    const router = useRouter();

    const goToProject = () => {
        router.push(link);
    }

    const goToProjectCode = () => {
        router.push(gitLink);
    }

    return (
        <div className={`md:rounded-sm border-1 flex flex-col md:w-4/6 md:h-96 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} shadow-sm h-72 my-4 rounded-sm w-4-6 md:p-4`}>
            <div className={`h-3/4 md:h-full w-full md:w-2/3 relative p-8`}>
                <div className="h-full w-full">
                    <Image fill src={`/static/assets/projects/${image}`} alt={`Image for ${title}`} />
                </div>
            </div>
            <div className={`flex flex-col w-full h-fit md:h-full md:w-1/3`}>
                <div className={`w-full md:w-1/ h-fit md:h-full flex md:flex-col md:justify-normal justify-center items-center`}>
                    <h5 className={`text-xl font-bold md:mt-4 md:mb-8`}>{title}</h5>
                    <p className={`hidden text-sm md:block`}>{description}</p>
                </div>
                <div className={`flex flex-row w-full md:w-full justify-around items-center md:flex-end h-16 `}>
                    <Link target="_blank" href={link} className={`w-36 h-8 mx-4 md:mx-0 rounded-sm flex justify-center items-center`}>Live App</Link>
                    <Link target="_blank" href={gitLink} className={`w-36 h-8 mx-4 md:mx-0 rounded-sm flex justify-center items-center`}>Code</Link>
                </div>
            </div>
        </div>
    )
}