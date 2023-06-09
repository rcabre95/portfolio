import Image from "next/image";

export interface ISkill {
    name: string;
    image: string;
}

export default function Skill({ skill, idx }: { skill: ISkill, idx: number }) {
    const { name, image } = skill;

    return (
        <div className={`border-2  md:border-myBrown h-16 w-28 xl:h-20 xl:w-40 flex flex-col justify-center items-center border-black rounded-md ${idx % 3 === 1 ? "-mt-6 md:-mt-10" : null}`}>
            <div className={`relative flex ${name === "Next.js" || name === "Mongo DB" ? "h-10 w-5/6 -mb-1" : "h-12 w-full" }`}>
                <Image fill src={`/static/assets/skills/${image}`} alt={`${name}`}/>
            </div>
            <p className={`${name === "React Testing Library" ? "text-xs" : "text-sm"} text-center w-full font-semibold flex justify-center items-center`}>{name}</p>
        </div>
    )
}