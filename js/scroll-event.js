window.addEventListener('scroll', (e) => {
    let scrollPosition = Math.round(this.scrollY)
    const sections = document.querySelectorAll('main section');
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        let elementVisible = 150;
        if (scrollPosition !== 0) {
            section.classList.add("before-scroll")
            if (sectionTop < windowHeight - elementVisible) {
                section.classList.add("scroll-active")
            }
            else {
                section.classList.remove("scroll-active")
            }
        }
    });
});