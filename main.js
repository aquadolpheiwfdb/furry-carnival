var canvas= new fabric.Canvas("myCanvas");

block_img_width=30;
block_img_height=30;

player_x=20;
player_y=20;

player_object="";
block_object="";



function player_reload(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}


function block_reload(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    
    if(e.shiftKey==true && keyPressed=="80"){
        console.log("shift and p pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;

        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;




    }

    if(e.shiftKey==true && keyPressed=="77"){
        console.log("shift and m pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;

        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;

        


    }

    if(keyPressed=="67"){
        console.log("c");
        block_reload("cloud.jpg");

    }

    if(keyPressed=="68"){
        console.log("d");
        block_reload("dark_green.png");

    }
    if(keyPressed=="71"){
        console.log("g");
        block_reload("ground.png");

    }
    if(keyPressed=="76"){
        console.log("l");
        block_reload("light_green.png");

    }
    if(keyPressed=="82"){
        console.log("r");
        block_reload("roof.jpg");

    }
    if(keyPressed=="84"){
        console.log("t");
        block_reload("trunk.jpg");

    }
    if(keyPressed=="85"){
        console.log("u");
        block_reload("unique.png");

    }
    if(keyPressed=="87"){
        console.log("w");
        block_reload("wall.jpg");

    }

    if(keyPressed=="89"){
        console.log("y");
        block_reload("yellow_wall.png");

    }

    if(keyPressed=="38"){
        console.log("up");
        up();
    }

    if(keyPressed=="40"){
        console.log("down");
        down();
    }

    if(keyPressed=="37"){
        console.log("left");
        left();
    }

    if(keyPressed=="39"){
        console.log("right");
        right();
    }
  

}


function up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        canvas.remove(player_object);
        player_reload();
    }


}


function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        canvas.remove(player_object);
        player_reload();
    }
}


function left(){
    if(player_x>0){
        player_x=player_x-block_img_width;
        canvas.remove(player_object);
        player_reload();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_img_width;
        canvas.remove(player_object);
        player_reload();
    }
}
