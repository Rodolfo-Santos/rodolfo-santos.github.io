var botaoinfo = document.querySelector("#btninfo");
var botaohard = document.querySelector("#btnhard");
var botaoadm = document.querySelector("#btnadm");


var blocoinfo = document.querySelector("#infoarq");
var blocohard = document.querySelector("#hardarq");
var blocoadm = document.querySelector("#admarq");

botaoinfo.addEventListener("click", function(){
    blocoinfo.classList.add("aparecer");
    blocoinfo.classList.remove("desaparecer");
    
    blocohard.classList.add("desaparecer");
    blocohard.classList.remove("aparecer");
    
    blocoadm.classList.add("desaparecer");
    blocoadm.classList.remove("aparecer");
});

botaohard.addEventListener("click", function(){
    blocohard.classList.add("aparecer");
    blocohard.classList.remove("desaparecer");
    
    blocoinfo.classList.add("desaparecer");
    blocoinfo.classList.remove("aparecer"); 
    
    blocoadm.classList.add("desaparecer");
    blocoadm.classList.remove("aparecer");
});


botaoadm.addEventListener("click", function(){
    blocoadm.classList.add("aparecer");
    blocoadm.classList.remove("desaparecer");
    
    blocoinfo.classList.add("desaparecer");
    blocoinfo.classList.remove("aparecer"); 
    
    blocohard.classList.add("desaparecer");
    blocohard.classList.remove("aparecer");
    
    console.log("ERROU!");
});
