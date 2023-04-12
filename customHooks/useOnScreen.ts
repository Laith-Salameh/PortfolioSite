import { RefObject, useEffect, useMemo, useState } from "react"

export default function useOnScreen(ref: RefObject<HTMLElement>) {

    const [isIntersecting, setIntersecting] = useState(false)
    const canDo = typeof IntersectionObserver !== "undefined";

    const observer = useMemo(()=> canDo && new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { rootMargin: "400px 0px 0px 0px"}
    ), [canDo])    
    useEffect(() => { 
      if(ref.current && observer ) observer?.observe(ref.current)
      return () => observer ? observer.disconnect() : undefined
    }, [observer, ref])
    return isIntersecting
  }