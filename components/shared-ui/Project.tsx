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

    return (
        <div className={`md:rounded-lg md:mx-2 rounded-md border-4 border-white flex flex-col h-72 w-96 my-4 bg-white overflow-hidden shadow-md`}>
            <div className={`h-2/3 w-full relative p-8`}>
                <div className="h-full w-full">
                    <Image fill src={`/static/assets/projects/${image}`} alt={`Image for ${title}`} />
                </div>
            </div>
            <div className={`flex flex-col w-full h-1/3`}>
                <div className={`w-full h-fit flex justify-center items-center`}>
                    <h5 className={`text-xl font-light text-white`}>{title}</h5>
                    {/* <p className={`hidden text-sm md:block`}>{description}</p> */}
                </div>
                <div className={`flex flex-row w-full md:w-full justify-around items-center h-16 `}>
                    { link.length === 0 ? null : 
                    <Link target="_blank" href={link} className={`bg-myBlue shadow-md w-36 h-8 mx-4 rounded-md flex justify-center items-center transition-colors border-2 border-myBrown text-myGrey hover:text-myBlue hover:bg-myBrown font-bold`}>
                        Live App
                    </Link> 
                    }
                    <Link target="_blank" href={gitLink} className={`font-bold shadow-md w-36 h-8 mx-4 rounded-md flex justify-center items-center border-2 border-myBrown text-myGrey hover:text-myBlue hover:border-myBlue hover:bg-myGrey transition-colors`}>
                        Code
                    </Link>
                </div>
            </div>
        </div>
    )
}