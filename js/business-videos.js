window.addEventListener('load', () => {
    const randomNum = Math.floor(Math.random() * 2) + 1;
    if (randomNum === 1) {
        document.getElementById('first-customer').style.display = 'flex';
    } else {
        document.getElementById('second-customer').style.display = 'flex';
    }
});