const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');

btn.addEventListener('click', () => {
    btn.querySelector('span').style.display = 'none';
    canvas.style.display = 'block';
});
