const loginForm = document.getElementById('login-form')
const form = document.querySelector("form")
const show = document.querySelector("div")


loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData(loginForm)
    
    const name = loginFormData.get('astronautName')
    const email = loginFormData.get('astronautEmail')
    const password = loginFormData.get('astronautPassword')

    form.style.display = "none"
    show.textContent = `Welcome ${name} to our page!`
    show.style.display = "block"
    console.log(name, email, password) 
    
    
})
