const mainSection = document.querySelector("main")

window.addEventListener('load', function () {
    mainSection.innerHTML += `  <div id="loading-screen"> <img src="./assets/images/pasha-logo.svg" alt="">
                                                        <p>PAŞA Banka xoş gəlmişsiniz</p>
                                </div>`
    let loadingScreen = document.getElementById('loading-screen');
    this.setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 800);
});