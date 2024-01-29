document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', revealElements);
    revealElements(); // Chama a função inicialmente para verificar cartões já visíveis
});

function revealElements() {
    const elements = document.querySelectorAll('.command-card');
    for (let elem of elements) {
        const elementPosition = elem.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 50) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    }
}
