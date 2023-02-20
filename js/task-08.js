const form = document.querySelector('.login-form');
form.addEventListener('submit', e);

function e(event) {
 event.preventDefault();
 
 const {
    elements: { email, password }
} = event.currentTarget;
    if( email.value === '' || password.value === ''){
        return alert('All fields must be completed');
    }
 console.log({Login: email.value, Password: password.value});
 event.currentTarget.reset();
}
