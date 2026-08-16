import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "staleNoticeDismissed";

export default function StaleNotice() {
    const [dismissed, setDismissed] = useState<boolean>(false);

    useEffect(() => {
        setDismissed(sessionStorage.getItem(STORAGE_KEY) === "true");
    }, []);

    const dismiss = () => {
        sessionStorage.setItem(STORAGE_KEY, "true");
        setDismissed(true);
    };

    if (process.env.NEXT_PUBLIC_SHOW_STALE_NOTICE === "false" || dismissed) return null;

    return (
        <div role="status" className={`z-40 relative w-full min-h-[3rem] bg-myBrown text-myBlue flex justify-center items-center py-2 pl-4 pr-12`}>
            <p className={`text-sm text-center`}>
                Heads up: this site is a few years old and no longer reflects my current skillset. For up-to-date work, take a look at my{` `}
                <Link target="_blank" href={`https://github.com/rcabre95`} className={`font-bold underline decoration-myBlue underline-offset-2 transition-colors hover:text-white hover:decoration-white`}>
                    GitHub
                </Link>.
            </p>
            <button
                onClick={dismiss}
                aria-label="Dismiss notice"
                className={`absolute right-2 top-0 bottom-0 my-auto h-8 w-8 rounded-full flex justify-center items-center text-xl leading-none transition-colors hover:bg-myBlue hover:text-myBrown`}
            >
                &times;
            </button>
        </div>
    )
}
