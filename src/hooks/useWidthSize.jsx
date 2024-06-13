import { useState, useEffect  } from "react";

const useWidthSize = () => {
  const [width, setWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width])

  return { width }
}

export default useWidthSize;