var main =document.getElementById("main");
var arr = ["https://i.pinimg.com/736x/90/17/c2/9017c20aeb8bbe2417235023bb69455b.jpg",
"https://i.pinimg.com/736x/81/60/5e/81605e77565564c36a62eb8c3c829997.jpg",
"https://i.pinimg.com/736x/c3/b3/f1/c3b3f1ea25dbf06e84b214751667cbee.jpg",
"https://i.pinimg.com/736x/47/91/d3/4791d3c30033aedcb4fd29a2c104e398.jpg",
"https://i.pinimg.com/736x/e7/18/11/e718112f06983f23ea6c43a01db55404.jpg",
"https://i.pinimg.com/1200x/96/79/85/967985ca22b2b00b485eca2bd47295d2.jpg",
"https://i.pinimg.com/736x/ee/dd/74/eedd740497705d3df314b21d6c9334ab.jpg",
"https://i.pinimg.com/736x/65/14/e2/6514e2ade7ba2eddff40960d1ec8f507.jpg"];
let s = "";
for(let i =1; i<40;i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src=${arr[r]}>
    </div>`;
}
main.innerHTML = s;

