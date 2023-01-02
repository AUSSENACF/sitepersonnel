class Sprite{
    constructor(config){
        // Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = ()=>{
            this.isLoaded = true;
        }
        //Shadow
        this.shadow = new Image();
        this.useShadow = true; // config.useShadow || false
        if(this.useShadow){
            this.shadow.src = "../sitePersonnel/content/shadow.png";
        }
        
        this.shadow.onload = ()=>{
            this.isShadowLoaded = true;
        }
        

        // Configure Animation & Initial State
        this.animation = config.animations|| {
            idleDown: [
                [0,0]
            ],
            walkDown:[
                [0,0],[1,0],[2,0],[3,0],
            ],
        };
        this.currentAnimation = config.currentAnimation || 'idleDown';
        this.currentAnimationFrame = 0;

        // Reference the game object
        this.gameObject = config.gameObject;
    }
    draw(ctx){
        const x = this.gameObject.x * 32;
        const y = this.gameObject.y * 32 + 6;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x,y)

        this.isLoaded && ctx.drawImage(this.image,
            0 ,  // image crop position X Start
            0 , // image crop postion Y start
            64, //crop size X
            64, //crop size Y
            x , // position on map X
            y , // position on map Y    
            64, // dimention image X
            64  // dimention image Y
            )
            
    }
}