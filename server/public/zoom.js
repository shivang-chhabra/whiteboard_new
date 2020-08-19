const zoomin=document.querySelector(".zoom-in");
const zoomout=document.querySelector(".zoom-out");

zoomin.addEventListener("click",function(e){

    ctx.scale(1.1,1.1);
    ctx.translate(-10,-0);
    ctx.clearRect(0, 0, board.width, board.height);
    redraw();
})
zoomout.addEventListener("click",function(){
    
    ctx.scale(0.95,0.95);
    ctx.translate(10,0)
    ctx.clearRect(0, 0, board.width, board.height);
    redraw();
})
