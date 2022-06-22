function rN(min, max) {
    return Math.random() * (max - min) + min;
}
var bdy=document.getElementsByClassName("login-box")[0];
var cont=document.createElement("div");
bdy.insertBefore(cont,bdy.firstChild);
var wh=window.innerHeight;
var ww=window.innerWidth;
for(var i=0;i<ww*0.1;i++){
    var b=document.createElement("div");
    b.setAttribute("class","block");
    cont.appendChild(b);
    let a=rN(-10,ww);
    let c=rN(-100,wh);
    let d=rN(.5,3.5);
    b.style.transform=`matrix(${d},0,0,${d},${a},${c})`;   
    //console.log("helo");
}
//console.log(ww*0.1);