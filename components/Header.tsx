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
        <div className={`h-16 bg-myBlue sticky top-0 bg-opacity-90 shadow-sm backdrop-filter backdrop-blur-sm flex justify-around font-bold md:justify-end z-30`}>
            <button onClick={scrollToHome} className={`md:mx-12 ${section === "home" ? "underline" : null}`}>Home</button>
            <button onClick={scrollToAbout} className={`md:mx-12 ${section === "about" ? "underline" : null}`}>About</button>
            <button onClick={scrollToProjects} className={`md:mx-12 ${section === "projects" ? "underline" : null}`}>Projects</button>
            <button onClick={scrollToContact} className={`md:mx-12 ${section === "contact" ? "underline" : null}`}>Contact</button>
        </div>
    )
}