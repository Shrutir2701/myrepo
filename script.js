let s1= document.getElementById("sq1");
let s2= document.getElementById("sq2");
let s3= document.getElementById("sq3");
let s4= document.getElementById("sq4");
s1.addEventListener("mouseenter", function(){
    let r =Math.floor(Math.random()*100);
    s1.innerHTML="<h1>"+r+"</h1>";
   
})
s1.addEventListener("mouseleave", function(){
   s1.innerHTML="<h1>1</h1>";
})
let clr ="red";
s2.addEventListener("mouseenter", function(){
    if(clr=="green"){
   s2.style.backgroundColor = "green";
   clr="red";
    }
    else if(clr=="red"){
        s2.style.backgroundColor = "red";
        clr ="blue";
    }
    else{
        s2.style.backgroundColor = "blue";
        clr ="green";
    }
})
s2.addEventListener("mouseleave", function(){
   s2.style.backgroundColor = "white";
})

s3.addEventListener("mouseenter", function(){
     let r1 =Math.floor(Math.random()*150);
    s3.style.backgroundColor= r1;
     let r2 =Math.floor(Math.random()*250);
    s3.style.backgroundColor= r2;
     let r3 =Math.floor(Math.random()*300);
    s3.style.backgroundColor= r3;
    s3.style.backgroundColor =`rgb(${r1},${r2},${r3})`;
})
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor = "white";
})

s4.addEventListener("mouseleave", function(){
 s1.style.backgroundColor = "white";
  s2.style.backgroundColor = "white";
   s3.style.backgroundColor = "white";
})
s4.addEventListener("mouseenter", function(){
let r1 =Math.floor(Math.random()*250);
let r2 =Math.floor(Math.random()*250);
let r3 =Math.floor(Math.random()*250);
s1.style.backgroundColor =`rgb(255,${r3},0)`;
s2.style.backgroundColor =`rgb(0,255,${r3})`;
s3.style.backgroundColor =`rgb(${r1},${r2},255)`;
})