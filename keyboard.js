const textarea = document.querySelector('textarea');
const buttons = document.querySelectorAll('.btn');
const delete_btn = document.querySelector('.delete');
const mayus_btn = document.querySelector('.mayus');
const spacer_btn = document.querySelector('.spacer');


let characters = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        characters = textarea.value.split('');
    })
})

delete_btn.addEventListener('click', () => {
    characters.pop();
    textarea.value = characters.join('');
})

mayus_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper');
    })
})

spacer_btn.addEventListener('click', () => {
    characters.push(' ');
    textarea.value = characters.join('');
})

