
const form = document.getElementById('form')
const dateOfBirth = document.getElementById('dateOfBirth')
const button = document.querySelector('button')
const date = document.getElementById('date')
const datePattern = dd/MM/yyyy


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const dateofBirth = dateOfBirth.value
    const datePattern = dd/MM/yyyy

    if (datePattern.test(dateofBirth)) {
        console.log('login is successful')
    }
    
})