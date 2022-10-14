const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');

buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover')
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover');
    });
    button.addEventListener('touchstart', () => {
        once(button.classList.add('hover'))
    });
    button.addEventListener('touchend', () => {
        button.classList.remove('hover');
    });
});

inputs.forEach((input) => {
    input.addEventListener('mouseenter', () => {
        input.classList.add('hover')
    });
    input.addEventListener('mouseleave', () => {
        input.classList.remove('hover');
    });
    input.addEventListener('touchstart', () => {
        once(input.classList.add('hover'))
    });
    input.addEventListener('touchend', () => {
        input.classList.remove('hover');
    });
});