let tileQty = 10; //number of hoverable tiles in the cursor wall
let imgList = ["dog1.jpg","dog2.jpg","dog3.jpg","dog4.jpg"]; //to modify the images
let tile;
let bg = document.getElementById("cursorWall");
var elem, rect, num, temp;
var mouseX=window.innerWidth, mouseY=window.innerHeight;
var cursor = {
    el:$('#cursorimg'),
    x:window.innerWidth, 
    y:window.innerHeight, 
    update:function(){
                  l = this.x-45; 
                  t = this.y-43; 
                  this.el.css({ 
                           'left': l+'px', 
                           'top': t+'px'}); 
    }
}

window.onload = function() {
    setInterval (move,1000/60);
}

$(window).mousemove (function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    elem = document.getElementById("cursorWall")
    rect = elem.getBoundingClientRect();
    if(mouseX < rect.left || mouseX > rect.right || mouseY < rect.top || mouseY > rect.bottom){cursorDisappear();}
    else{cursorAppear();}
})

function move(){
    cursor.x = lerp (cursor.x, mouseX, 0.1);
    cursor.y = lerp (cursor.y, mouseY, 0.1);
    cursor.update();
}

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}

function cursorAppear() {
    document.getElementById("cursorimg").style.opacity = "1";
}

function cursorDisappear() {
    document.getElementById("cursorimg").style.opacity = "0";
}

for(let i = 0; i < tileQty; i++){
    tile = document.createElement('div')
    tile.className = 'tile';
    tile.style.width = 100/tileQty + "%";
    document.getElementById("cursorimg").style.backgroundSize = "contain";
    document.getElementById("cursorimg").style.backgroundRepeat = "no-repeat";
    bg.appendChild(tile);
}

function generateCursorImg() {
    num = Math.floor(Math.random()*imgList.length);
    while(num == temp){
        num = Math.floor(Math.random()*imgList.length);
    }
    temp = num;
    document.getElementById("cursorimg").style.backgroundImage = "url(media/" + imgList[num];
}

$(".tile").mouseover(function(){
    generateCursorImg();
})