import { toast } from "react-hot-toast"

export default function SuccessToast(t: any) {

    return (
        <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md h-16 w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 z-20`}
        >
            suh dude
        </div>
    )
}