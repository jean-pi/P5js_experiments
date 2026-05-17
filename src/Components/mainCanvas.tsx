import p5 from 'p5'

/**
* Inicializa el canvas principal.
*
* @param {data for canvas} 
*/


function MainCanvas() {

    const htmlFatherCanvas = document.getElementById('mainCanvas')

    const createMainCanvas = (Sketch: p5) => {

        Sketch.setup = () => {
          Sketch.createCanvas(400, 400)
        }
    
        Sketch.draw = () => {
          Sketch.background(220)
        }
    
    };
    
    let p5MainCanvas = new p5(createMainCanvas, htmlFatherCanvas)



    return (
        <div id="mainCanvas">
            
        </div>
    )
}

export default MainCanvas