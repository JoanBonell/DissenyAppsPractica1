/*
    Industrious by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        default: ['1681px', null],
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Menu.
    $('#menu')
        .append('<a href="#menu" class="close"></a>')
        .appendTo($body)
        .panel({
            target: $body,
            visibleClass: 'is-menu-visible',
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right'
        });

})(jQuery);

$(document).ready(function() {
    var lastX = 0;
    // Inicialmente, no hay una dirección definida, así que es 0.
    var direction = 0;

    function position(event) {
        var cursor = $("#imagen-movil");
        if (cursor.length === 0) return; // Verifica si el elemento existe.

        var clientX = event.clientX || event.originalEvent.touches[0]?.clientX;

        // Permite que la imagen siga al cursor en el eje X.
        cursor.css('left', clientX + 'px');

        // Determina la nueva dirección basada en el movimiento del ratón.
        var newDirection = clientX - lastX > 0 ? 1 : (clientX - lastX < 0 ? -1 : direction);

        // Si la dirección ha cambiado, ajusta la rotación.
        if (newDirection !== direction) {
            // Calcula el nuevo ángulo de rotación sumando 180 grados cada vez que cambia la dirección.
            var rotationDegrees = cursor.data('rotation') || 0; // Obtiene el ángulo actual desde el data attribute.
            rotationDegrees = (rotationDegrees + 180) % 360; // Ajusta el ángulo para que sea 0 o 180.
            cursor.css('transform', `rotateY(${rotationDegrees}deg)`);

            // Guarda el nuevo ángulo de rotación y la dirección para futuras referencias.
            cursor.data('rotation', rotationDegrees);
        }

        // Actualiza 'lastX' y 'direction' para el próximo evento.
        lastX = clientX;
        direction = newDirection;
    }

    $(document).on('mousemove touchmove', position);
});

document.addEventListener('mousemove', function(e) {
    var brujula = document.getElementById('brujula');
    var rect = brujula.getBoundingClientRect();
    var centerX = rect.left + (rect.width / 2);
    var centerY = rect.top + (rect.height / 2);

    var angleRadians = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    var angleDeg = (angleRadians * (180 / Math.PI) + 360) % 360;
  
    // Añadir 275 grados para hacer que la brújula apunte al "norte"
    var angleDegNorte = (angleDeg + 275) % 360;

    brujula.style.transform = 'rotate(' + angleDegNorte + 'deg)';
});


document.addEventListener("DOMContentLoaded", function() {
    var imagenAccion6 = document.querySelector('.imagen-accion6');

    imagenAccion6.addEventListener('click', function() {
        var body = document.body;
        var icebergImageContainer = document.createElement('div');
        icebergImageContainer.style.position = 'fixed';
        icebergImageContainer.style.left = '0';
        icebergImageContainer.style.top = '0';
        icebergImageContainer.style.width = '100%';
        icebergImageContainer.style.height = '100%';
        icebergImageContainer.style.display = 'flex';
        icebergImageContainer.style.justifyContent = 'center';
        icebergImageContainer.style.alignItems = 'center';
        icebergImageContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
        icebergImageContainer.style.zIndex = '1000';
        icebergImageContainer.innerHTML = '<img src="../Industrious/images/iceberg.png" style="max-width:60%; max-height:80%;">';
        body.appendChild(icebergImageContainer);

        icebergImageContainer.addEventListener('click', function() {
            body.removeChild(icebergImageContainer);
        });
    });
});