var arr=[
    {dp:"https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story:"https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        
    },{dp:"https://images.pexels.com/photos/3533228/pexels-photo-3533228.png",
        story:"https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        
    },{dp:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        
    },{dp:"https://images.pexels.com/photos/9136065/pexels-photo-9136065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        story:"https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        
    }
]
// var storia=documet.querySelector("#storia")
var  cultter=""
arr.forEach(function(elem,idx){
    cultter+=`<div class="story">
                    <img id="${idx}" src="${elem.dp}">
                </div>`
})
documet.querySelector("#storia").innerHTML=cultter;
//  storia.addEventListener("click",function(dets){
//   document.querySelector("#full-screen").style.display="block" 
//  document.querySelector("#full-screen").style.backgroundImage =`url(${arr[dets.target.id].story })` 

//  })