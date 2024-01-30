document.addEventListener('DOMContentLoaded', function () {
    y = 0;
    x = 0;
    pulsado = false;
    imagen = document.getElementById('imagen');

    document.getElementById('imagen').addEventListener('mousedown', function () {
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
        pulsado = false;

    })
})
