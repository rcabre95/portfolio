export default function Header() {

    return (
        <div className={`h-16 sticky top-0 flex justify-around md:justify-end bg-white z-10`}>
            <button className={`md:mx-12`}>Home</button>
            <button className={`md:mx-12`}>About</button>
            <button className={`md:mx-12`}>Projects</button>
            <button className={`md:mx-12`}>Contact</button>
        </div>
    )
}