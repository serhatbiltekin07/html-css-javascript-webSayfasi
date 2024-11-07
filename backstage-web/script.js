document.querySelector('.fullpage').addEventListener('wheel', function(event) {
    event.preventDefault();
    const fullpage = document.querySelector('.fullpage');
    const sections = document.querySelectorAll('.fp-section');
    let delta = event.deltaY;
    let currentSection = Math.floor(fullpage.scrollTop / window.innerHeight);
    let nextSection = delta > 0 ? currentSection + 1 : currentSection - 1;
    
    // Geçerli bölümün renk bilgisi
    //const currentBackgroundColor = getComputedStyle(sections[currentSection]).backgroundColor;
    const nextBackgroundColor = getComputedStyle(sections[nextSection] || sections[currentSection]).backgroundColor;

    // Arka plan rengini değiştiren fonksiyon
    function changeBackgroundColor() {
        fullpage.style.backgroundColor = nextBackgroundColor;  // Arka plan rengini değiştir
    }

    // Arka plan rengini değiştir
    changeBackgroundColor();

    if (delta > 0) {
        // Scroll down
        fullpage.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    } else {
        // Scroll up
        fullpage.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth'
        });
    }
});
