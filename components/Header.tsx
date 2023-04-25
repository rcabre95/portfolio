export default function Header() {

    return (
        <div className={`h-16 sticky top-0 flex justify-around bg-white z-10`}>
            <button>Home</button>
            <button>About</button>
            <button>Projects</button>
            <button>Contact</button>
        </div>
    )
}