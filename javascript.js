const canvas=document.getElementById("canvas")
const c = canvas.getContext("2d")
canvas.width=innerWidth
canvas.height=innerHeight
class Player{
    constructor(){
        this.velocity={
            x:0,
            y:0
        }
        const image=new Image()
        image.src='spaceship.jpg'
        image.onload =() =>{
            const scale=0.15;
        this.image=image
        this.width=image.width*scale
        this.height=image.height*scale
        this.position={
            x: canvas.width/2-this.width/2,
            y: canvas.height-this.height-20
        }
        }
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
    }
PaymentRequestUpdateEvent(){
    if(this.image){
    this.draw()
this.position.x+=this.velocity.x
}
}
}
const player=new Player()
const keys={
    a:{
        pressed :false
    },
    d:{
        pressed :false
    },
    space :{
        pressed :false
    }
}
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle='black'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.PaymentRequestUpdateEvent()

    if(keys.a.pressed) {
        player.velocity.x=-5
    }else {
        player.velocity.x=0
    }
}
animate()

addEventListener('keydown',({key}) => {
    switch(key){
        case 'a':
            console.log('left')
            keys.a.pressed=true
            break
        case 'd':
            console.log('right')
            keys.a.pressed=true
            break
        case ' ':
            console.log('space')
            break
    }
})
