var istatus=document.querySelector("h5")
var check=0


var addFriend=document.querySelector("#add")



addFriend.addEventListener("click",function(){
    if(check == 0){ 
        istatus.innerHTML="Friends"
        istatus.style.color="green"
        addFriend.innerHTML="Remove Friend"
        check=1
    }else{
    istatus.innerHTML="Stranger"
        istatus.style.color="Red"
         addFriend.innerHTML="Add Friend"

        check=0}
   
})
