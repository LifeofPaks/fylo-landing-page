const form =  document.querySelector('.form')
const input =  document.querySelector('.input')
const free =  document.querySelector('.free')
const errorMessage =  document.querySelector('.error-msg')


let isValid = false

input.addEventListener("input", () => {
    if (input.value == "") {
      input.classList.add("error");
      errorMessage.classList.add('active')
      isValid = false;

    } else if ( input.value != "" &&
      input.value.match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      )
    ) {
        input.classList.remove("error");
        errorMessage.classList.remove('active')
        isValid = true;
    }})


form.addEventListener('submit', e=>{
    e.preventDefault()
   
})

