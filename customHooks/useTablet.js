import {useState, useEffect} from "react"

const useTablet = myRef => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const tableSize = 1024;

  useEffect(() => {
    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight
    })
    
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])
  return dimensions.width <= tableSize ;
};

export default useTablet;