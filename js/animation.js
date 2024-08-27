function handleScroll() {
    var elements = document.getElementsByClassName('animation');
    var windowHeight = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var rect = element.getBoundingClientRect();

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('visible');
        } 
    }
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

