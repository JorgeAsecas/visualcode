document.addEventListener('DOMContentLoaded', function () {
    var y = 0;
    var x = 0;
    var pulsado = false;
    var imagen = document.getElementById('imagen');

    document.getElementById('imagen').addEventListener('mousedown', function () {
        document.getElementById('imagen').innerHTML = 'TEXTO  NUEVO';
        pulsado = true;
    });

    document.addEventListener('mousemove', function (event) {
            if(pulsado){
            y = event.clientY;
            x = event.clientX;
            console.log(y)
            console.log(x)
            imagen.style.transform = `translate(${x}px, ${y}px)`;
            }
        });

        document.addEventListener('mouseup', function () {
        document.getElementById('imagen').innerHTML = 'TEXTO ORIGINAL';
        pulsado = false;

    })
})
