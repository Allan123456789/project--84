canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_image="car1.png";

rover_width=120;
rover_height=70;

rover_x=10;
rover_y=100;


rover2_image="car2.png"

rover2_width=120;
rover2_height=70;

rover2_x=10;
rover2_y=10;


background_image="racing.jpg";



function add(){
    background_imgTag=new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    rover_imgTag=new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

    rover2_imgTag=new Image();
    rover2_imgTag.onload = uploadRover2;
    rover2_imgTag.src = rover2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadRover2(){
    ctx.drawImage(rover2_imgTag, rover2_x, rover2_y, rover2_width, rover2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=="38"){
        up();
        console.log("up");
        
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
        
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
        
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    
    if(keyPressed=="87"){
        up2();
        console.log("up");
    }

    if(keyPressed=="83"){
        down2();
        console.log("down");
    
}

if(keyPressed=="65"){
    left2();
    console.log("left");

}
if(keyPressed=="68"){
    right2();
    console.log("right");

}

    }
       function up(){
        if(rover_y >= 0){
            rover_y =rover_y -10;
            console.log("when up arrow is pressed,x="+rover_x +" y="+ rover_y); 
            uploadBackground();
                uploadRover();
                uploadRover2();
            
        }
        
    }  function up2(){
        if(rover2_y >= 0){
            rover2_y =rover2_y -10;
            console.log("when up arrow is pressed,x="+rover2_x +" y="+ rover2_y); 
            uploadBackground();
                uploadRover2();
                uploadRover();
            
        }
        
    }
     
    function down(){
        if(rover_y <=500 ){
            rover_y =rover_y +10;
            console.log("when down arrow is pressed,x="+rover_x +" y="+ rover_y); 
            uploadBackground();
            uploadRover();
            uploadRover2();
        }}
            
            function down2(){
                
                if(rover2_y <=500 ){
                    rover2_y =rover2_y +10;
                    console.log("when down arrow is pressed,x="+rover2_x +" y="+ rover2_y); 
                    uploadBackground();
                        uploadRover2();
                    uploadRover();

                }
                
            }
                
                
            
        
        
    

            function left(){
                if(rover_x >= 0){
                    rover_x =rover_x -10;
                    console.log("when left arrow is pressed,x="+rover_x +" y="+ rover_y); 
                    uploadBackground();
                        uploadRover();
                            uploadRover2();                
                }
        
    }

    
    function left2(){
        if(rover2_x >= 0){
            rover2_x =rover2_x -10;
            console.log("when left arrow is pressed,x="+rover2_x +" y="+ rover2_y); 
            uploadBackground();
                uploadRover();
                    uploadRover2();                
        }

}

function right(){
    if(rover_x <= 700){
        rover_x =rover_x +10;
        console.log("when right arrow is pressed,x="+rover_x +" y="+ rover_y); 
        uploadBackground();
            uploadRover();
        uploadRover2();

    }
    
}


function right2(){
    if(rover2_x <= 700){
        rover2_x =rover2_x +10;
        console.log("when right arrow is pressed,x="+rover2_x +" y="+ rover2_y); 
        uploadBackground();
            uploadRover();
            uploadRover2();
        
    }
    
}
