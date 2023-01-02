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
        image.src = "../sitePersonnel/content/decor.png"
        

        //Place some game object
        const hero = new GameObject({
            x:4,
            y:8
        })
        const npc = new GameObject({
            x:6,
            y:6,
            src : "../sitePersonnel/content/shadow.png" 
        })

        setTimeout(()=>{
            hero.sprite.draw(this.ctx);
            npc.sprite.draw(this.ctx);
        },200)

    }
    
}
