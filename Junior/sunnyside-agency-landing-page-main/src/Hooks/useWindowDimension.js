import { useState, useEffect } from 'react';



export default function useWindowDimensions() {
    const [size, setSize ] = useState(window.innerWidth)
    useEffect(() =>{
      const handleResize = () =>{
        setSize(window.innerWidth)
      }
      window.addEventListener('resize',handleResize)
    })
    return size
}
