const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(formEl);
    const userEmail= formEl.elements.email.value.trim();
    const userPassword= formEl.elements.password.value;
    const data = {};

    if (userEmail === '' || userPassword === ''){
        alert('All form fields must be filled in');
    } else {
        formData.forEach((value, key) => {
                data[key] = value;
              });
            
            }
            console.log(data);

    formEl.reset();
})

