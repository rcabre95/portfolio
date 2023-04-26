export default function Header({ homeRef, aboutRef, projectsRef, contactRef }: { aboutRef: any, homeRef: any, projectsRef: any, contactRef: any }) {
    
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
        <div className={`h-16 sticky top-0 flex justify-around font-bold md:justify-end bg-white z-10`}>
            <button onClick={scrollToHome} className={`md:mx-12`}>Home</button>
            <button onClick={scrollToAbout} className={`md:mx-12`}>About</button>
            <button onClick={scrollToProjects} className={`md:mx-12`}>Projects</button>
            <button onClick={scrollToContact} className={`md:mx-12`}>Contact</button>
        </div>
    )
}