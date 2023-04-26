export interface ISkill {
    name: string;
    image: string;
}

export default function Skill({ skill }: { skill: ISkill }) {

    return (
        <div className="text-xs">
            <p className="text-xs">{skill.name}</p>
            <p className="text-xs">{skill.image}</p>
        </div>
    )
}