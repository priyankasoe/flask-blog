console.log('i am working');

window.onload = function() {
    const convas = document.getElementById('canvas1'); 
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
    const flowfield = new FlowFieldEffect(ctx, canvas.width, canvas.height); 
}

class FlowFieldEffect {
    // declaring private class fields 
    #ctx; 
    #width; 
    #height; 

    // runs once with instance of class
    // instantiating 
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#width = width; 
        this.#height = height; 
        console.log('effect loaded');
        this.#draw(10,10); 
    }

    // private method 
    #draw(x,y){
        const length = 500; 
        this.#ctx.beginPath(); 
        this.#ctx.moveTo(x,y); 
        this.#ctx.lineTo(x+length, y+length); 
        // actually draws it 
        this.#ctx.stroke(); 
    }
}