canvas= document.getElementById("canvas");


ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(150, 210, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(275, 210, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(400, 210, 50 , 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 5;
ctx.arc(215, 260, 50 , 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(340, 260, 50 , 0, 2 * Math.PI);
ctx.stroke();

function ShowContent(){
    var display=[];
    var button= '<button type="button"><a href= "https://en.wikipedia.org/wiki/Olympic_symbols" target=_blank>Read More</a></button>';
    display.push("The Olympic symbols are icons, flags and symbols used by the International Olympic Committee (IOC) to elevate the Olympic Games. Some—such as the flame, fanfare and theme—are more commonly used during Olympic competition, but others, such as the flags, can be seen throughout the years. The Olympic flag was created under the guidance of Baron de Coubertin in 1913 and was released in 1914. It was first hoisted in 1920 in Antwerp, Belgium at the 1920 Summer Olympics in the main stadium. The five rings represent the five continents of the world."+"<br>"+"<br>"+ button);
    document.getElementById("olympics").innerHTML=display;
    console.log(button);
    
}