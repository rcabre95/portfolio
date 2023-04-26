import { useEffect, useState, useMemo } from "react";

export default function useOnScreen(ref: React.RefObject<HTMLElement>) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )


  useEffect(() => {
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}