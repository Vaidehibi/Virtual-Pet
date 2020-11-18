var dog, happyDog, database, foodS, foodStock;

function preload()
{
  this.image = loadImage("images/doglmg.png");
  this.image = loadImage("images/doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

  dog= createSprite(200,200);
  dog.addImage("dogImg.png");
  
}


function draw() {  
background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  fill("black");
  text("Press Up Arrow key to feed Doggie milk", 50,200);

  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS= data.val();
}

function writeStock(x) {

  if(x<=0){
    x=0;
  }else{
  x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}