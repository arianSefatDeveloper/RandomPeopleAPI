let colors = document.querySelectorAll(".btn")
colors.forEach(function(btn){
    btn.addEventListener("click" , function(){
        document.documentElement.style.setProperty("--theme-color",btn.getAttribute("data-color"))
    })
})





// API

let card =  document.querySelector(".card")


   

window.addEventListener("load" , ()=>{

    fetch("https://randomuser.me/api/").then((respons)=>{
        return respons.json()
    }).then((data)=>{
        console.log(data);

        card.insertAdjacentHTML("afterbegin" , `      <img src="${data.results[0].picture.large}" alt="profile_img">
<h4>${data.results[0].name.first}    ${data.results[0].name.last}</h4>
<h5>${data.results[0].email} </h5>
<div class="details">
    <div class="column">
        <h2>${data.results[0].phone} </h2>
        <span>phone</span>
    </div>
    <div class="column">
        <h2>${data.results[0].dob.age} </h2>
        <span>Age</span>
    </div>
</div>
<div class="buttons">
    <button>${data.results[0].location.city} </button>
    <button>${data.results[0].location.country} </button>
</div>`)

    })
})





