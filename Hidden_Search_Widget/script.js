const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// toggle is a method to toggle a class, basically adding and removing it.
// the focus method will put focus onto the element.
btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})