// JavaScript functionality here allows to click on "Next" to move onto next step and click on "Prev" to move to previous step

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    // Do not want progress to exceed the number of steps so if currentActive increments to number greater than steps available, add if statement that sets at maximum number.
    // Since circles is a NodeList array, it has a length property of the number of circles available

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
    
});

prev.addEventListener('click', () => {
    currentActive--;

    // The check for the decrement that it does not go below 1 into negative numbers.
    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
    
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    // We want the progress bar to fill in the spaces in between the circles, but there are 1 less spaces between than total number of circles.
    // actives.length / circles.length proceeds in quarters; i.e, 50%, 75%, 100%
    // But we want the progress bar to show up at 33%, 66%, and 100% in thirds
    // So we reduce the numbers by 1 to achieve the desired percentages

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}