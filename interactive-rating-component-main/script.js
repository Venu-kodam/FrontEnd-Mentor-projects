let rateComponent = document.querySelector('.rate-component');
let thankYouComponent = document.querySelector('.thank-you');
let submitbtn = document.getElementById('submitBtn');
let rating = document.getElementById("rating");
let rates = document.querySelectorAll(".btn");

//when we click on the button ,we need to unhide the thankYou component
// and hide the rating component
submitbtn.addEventListener("click", ()=>{ 
    thankYouComponent.classList.remove("hidden");
    rateComponent.style.display = "none";
})

//run loop for all the buttons and which btn we  clicked
//we need to pass as innerHtml to the rating
rates.forEach((rate)=>{ 
    rate.addEventListener("click",()=>{
        rating.innerHTML = rate.innerHTML;
    })
})