const refs = {
    nameInput:document.querySelector('#name-input'),
    nameOutput:document.querySelector('#name-output'),
}
refs.nameInput.addEventListener('input', e);

function e(event) {
    refs.nameOutput.textContent = event.target.value;
    if(event.target.value.trim()=== ''){
        refs.nameOutput.textContent = 'Anonymous';
    }
    console.log(event.target.value);
}