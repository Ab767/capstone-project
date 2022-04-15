const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var basket
var fruit
var fruit_con
var fruit_con_2
var fruit_con_3
var rope3

var button,button2,button3;

var star_1
var star_2
var empty_star
var greyStar
var star,star2
var blower
var one_starImg
var two_starImg


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

