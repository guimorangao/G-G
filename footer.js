$(document).ready(function() {
    var lastScrollTop = 0;
    var delta = 5; // valor para definir quando o scroll é considerado como movimento

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        // Verifica a direção do scroll
        if (Math.abs(lastScrollTop - scrollTop) <= delta)
            return; // Movimento muito pequeno, ignora

        if (scrollTop > lastScrollTop) {
            // Scroll para baixo
            $('.footer-top').css('bottom', '-100px'); // Esconde o footer
        } else {
            // Scroll para cima
            $('.footer-top').css('bottom', '0'); // Mostra o footer
        }

        lastScrollTop = scrollTop;
    });
});