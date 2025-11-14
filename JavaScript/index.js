// javascript
const popUp = document.getElementById("pop-up")
const closeBtn = document.getElementById("close-btn")
const popUpForm = document.getElementById("pop-up-form")
const popUpText = document.getElementById("pop-up-text")
const declineBtn = document.getElementById("decline-btn")
const btnContainer = document.getElementById("btn-container")


setTimeout(function(){
    popUp.style.display = "inline"
}, 1500)


closeBtn.addEventListener("click", function(){
    popUp.style.display = "none"
})

declineBtn.addEventListener("mouseenter", function(){
    btnContainer.classList.toggle("reverse")
})


popUpForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    
    const popUpFormData = new FormData(popUpForm)
    const fullName = popUpFormData.get("fullName")
    
    popUpText.innerHTML = `
    <img src="images/loading.svg" class="loading">
    <h4>
    Hahahahaha we extracting your data...
    </h4>`
    
    setTimeout(function(){
        
        popUpText.innerHTML = `
        <img src="images/loading.svg" class="loading">
        <h4>
        One sec we are on good way to steal your precious data... 🤑 
        </h4>
        `
        
    }, 1500)
    
    setTimeout(function(){
        document.getElementById("pop-up-inner").innerHTML = `
        
        <h3>
        You are a fool <span class="data-name">${fullName}</span>!
        </h3>
        
        
        <h4>
        You just sold your soul to us! 😈 
        </h4>
        
        <img src="images/giphy.gif" class="laugh-gif">
        
        `

        closeBtn.disabled = false
        
    }, 3000)
    
})

