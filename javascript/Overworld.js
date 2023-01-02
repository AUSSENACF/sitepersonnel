class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init(){
        const image = new Image();
        image.onload = () =>{
            this.ctx.drawImage(image,0,0)
        };
        

        const x = 1;
        const y = 1;

        const shadow = new Image();
        shadow.onload = () =>{
            this.ctx.drawImage(
                shadow , 
                0,  // image crop position X Start
                0, // image crop postion Y start
                64, //crop size X
                64, //crop size Y
                x * 64, // position on map X
                y * 64, // position on map Y
                64, // dimention image X
                64  // dimention image Y
                )
        }
        shadow.src = "/content/shadow.png";

        const hero = new Image();
        hero.onload = () =>{
            this.ctx.drawImage(
                hero , 
                0,  // image crop position X Start
                64, // image crop postion Y start
                64, //crop size X
                64, //crop size Y
                x * 64, // position on map X
                y * 64, // position on map Y
                64, // dimention image X
                64  // dimention image Y
                )
        }
        hero.src = "/content/hero2.png";

    }
    
}
