import p5 from 'p5'
import { useEffect, useRef } from 'react'
import { whiteboard } from './p5_funtions/WhiteBoard'
import './MainCanvas.css'

/**
* Inicializa el canvas principal.
* P5 en modo instancia desde la calse principal "p5"
* @param {data for canvas} 
* @returns {number}
* @throws {Error} Si el usuario no existe.
*/


function MainCanvas() {

    const canvasRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
      const instance = new p5(whiteboard, canvasRef.current!)
      return () => {instance.remove()}
    }, [])

    return (
        <div className="MainCanvas" ref={canvasRef}>

        </div>
    )
}

export default MainCanvas