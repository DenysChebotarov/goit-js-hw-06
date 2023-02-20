const inputRef = document.querySelector("#validation-input");
console.log(inputRef.dataset)
inputRef.addEventListener("blur", (event) => {

  if(event.currentTarget.value.length === Number(inputRef.dataset.length)){
    validRef();
  } else {
    inValidRef();
  }
});

function validRef() {
  inputRef.classList.add('valid');
  inputRef.classList.remove('invalid')
}
function inValidRef() {
  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid')
}


