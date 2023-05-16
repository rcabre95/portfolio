export default function Header({ section, homeRef, aboutRef, projectsRef, contactRef }: { section: string, aboutRef: any, homeRef: any, projectsRef: any, contactRef: any }) {
    
    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={`h-16 bg-myBlue w-full sticky top-0 bg-opacity-90 shadow-sm backdrop-filter backdrop-blur-sm flex justify-around font-bold md:justify-end z-50`}>
            <button onClick={scrollToHome} className={`md:mx-12 transition-colors hover:text-yellow-400 ${section === "home" ? "text-yellow-400" : "text-myGrey"}`}>Home</button>
            <button onClick={scrollToAbout} className={`md:mx-12 transition-colors hover:text-yellow-400 ${section === "about" ? "text-yellow-400" : "text-myGrey"}`}>About</button>
            <button onClick={scrollToProjects} className={`md:mx-12 transition-colors hover:text-yellow-400 ${section === "projects" ? "text-yellow-400" : "text-myGrey"}`}>Projects</button>
            <button onClick={scrollToContact} className={`md:mx-12 transition-colors hover:text-yellow-400 ${section === "contact" ? "text-yellow-400" : "text-myGrey"}`}>Contact</button>
        </div>
    )
}