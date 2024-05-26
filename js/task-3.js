const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', e => {
    e.preventDefault();

    const user = inputEl.value.trim();
    if (user === '') {
        outputEl.textContent = 'Anonymus';
    } else {
        outputEl.textContent = user;
    }

})


