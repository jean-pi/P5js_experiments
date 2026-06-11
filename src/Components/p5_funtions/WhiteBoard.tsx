import p5 from "p5"

export const whiteboard = (p: p5) => {

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.strokeWeight(5)
        p.background(255, 255, 255)
        p.colorMode(p.RGB);
        p.describe('A blank canvas where the user draws by dragging the mouse')
        p.filter(p.BLUR, 10)
        p.fill(255,0,0)
        p.rect(100,100,200,200)

        p.mouseDragged = () => {
            //let lineHue = p.mouseX - p.mouseY;
            p.stroke(0, 0, 0);
            p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
        }
    }   

    p.draw = () => {



    }
}
