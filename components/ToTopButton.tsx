import Image from "next/image"

export default function ToTopButton({ homeRef }: { homeRef: any }) {

    const scrollHome = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
            <button className={`z-30 absolute bottom-[5.8rem] m-auto left-0 right-0 rounded-full overflow-hidden h-12 w-12 transition duration-200 hover:scale-150 hover:-translate-y-2.5`} onClick={scrollHome}>
                <Image fill src={`/static/assets/tree.svg`} alt={`up arrow svg`} />
            </button>
        
    )
}