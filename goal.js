const color=document.getElementById("color");
const colorSelect=document.getElementById("colorSelect");

color.addEventListener("change",function(e){
     let val=e.target.value;
     document.body.style.backgroundColor=val;
     colorSelect.innerText=val;
})