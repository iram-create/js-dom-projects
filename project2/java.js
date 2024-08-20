var heart= document.querySelector("i")
var con=document.querySelector("#contaionar")
check=0
con.addEventListener("dblclick",function(){

    heart.style.transform=" translate(-50%,-50%) scale(1.5)"
    heart.style.opacity=2
    heart.style.color="red"
    setTimeout(function(){
        heart.style.opacity=0
        },1000)
    setTimeout(function(){
        heart.style.transform=" translate(-50%,-50%) scale(0)"
        },1500)
  setTimeout(function(){
    heart.style.transform=" translate(-50%,-50%) scale(1)"
         heart.style.opacity= 0.5
         heart.style.color="white"
  },2000)
         
    
})

