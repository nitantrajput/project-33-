const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground , plinkos = [],divisions = [],particles = [];
var engine , world;
var score = 0;
var particle;
var turn = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var count = 0;
function setup(){
    canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,10);
    //yellowLine =  createSprite(width/2,600,480,10)
    for(var j = 40;j <= width; j = j + 50){
        plinkos.push(new Plinko(j,75));
    }
    for(var j = 15; j <= width - 10;j = j + 50){
        plinkos.push(new Plinko(j,175));
    }
    for(var j = 25; j <= width - 10;j = j + 50){
        plinkos.push(new Plinko(j,275));
    }
    for(var j = 45; j <= width - 10;j = j + 50){
        plinkos.push(new Plinko(j,475));
    }
    for(var j = 75; j <= width - 10;j = j + 50){
        plinkos.push(new Plinko(j,375));
    }
    for(var d = 0; d <= width - 10;d = d + 50){
        divisions.push(new Division(d,height-300/2,10,300));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    push()
    strokeWeight(10)
    stroke("yellow")
    line (0,500,width,500);
    pop()

    if(frameCount%60 === 0){
        particles.push(new Particle(random(width/2 - 10 , width/2 + 10), 10,10))
    }
    for(var p = 0; p < particles.length; p++){
        particles[p].display();
    }
    for(var d = 0; d < divisions.length; d++){
        divisions[d].display();
    }
    for(var pl = 0; pl < plinkos.length; pl++){
        plinkos[pl].display();
    }
    if(particle != null){
        particle.display();
        if(particle.body.position.y > 760){
            if(particle.body.position.x < 300){
                score = score + 500;
                particle = null;
                if(count >= 5){
                    gameState = "end";
                }
            }
            if(particle.body.position.x > 301 && particle.body.position.x < 600){
                score = score + 100;
                particle = null;
                if(count >= 5){
                    gameState = "end";
        }
    }
            if(particle.body.position.x > 601 && particle.body.position.x < 900){
                score = score + 100;
                particle = null;
                if(count >= 5){
                    gameState = "end";
    
}
}
        }
    }
}
function mousePressed(){
    if(gameState !== "end"){
        count++;
        particle = new Particle(mouseX , 10 , 10 , 10);
    }
}