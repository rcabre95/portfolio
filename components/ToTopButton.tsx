import Image from "next/image"

export default function ToTopButton({ homeRef }: { homeRef: any }) {

    const scrollHome = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={`absolute z-10 bottom-20 h-fit w-full flex justify-center items-center`}>
            <button className={`rounded-full overflow-hidden h-10 w-10`} onClick={scrollHome}>
            <Image fill src={`/static/assets/up-arrow.svg`} alt={`up arrow svg`} />
            </button>
        </div>
    )
}