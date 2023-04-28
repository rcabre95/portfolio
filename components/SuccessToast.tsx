import { Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function SuccessToast() {

    return (
        <Transition
            as={Fragment}
            show={}
            enter=""
            enterFrom=""
            enterTo=""
            leave=""
            leaveFrom=""
            leaveTo=""
        >
            <div
            className={`max-w-md h-16 w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 z-20`}
            >
                suh dude
            </div>
        </Transition>
    )
}