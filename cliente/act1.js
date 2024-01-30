
document.addEventListener('mousemove', function (event) {
    document.getElementById("cuerpo").style.backgroundColor = "white";
    }
);
document.addEventListener('keydown', function (event) {
    log =  event.key
    switch(log) {
        case "a":
            document.getElementById("cuerpo").style.backgroundColor = 'yellow';
        break;
        case 'r':
            document.getElementById("cuerpo").style.backgroundColor = 'red';
        break;
        case 'n':
            document.getElementById("cuerpo").style.backgroundColor = 'black';
        break;
        case 'v':
            document.getElementById("cuerpo").style.backgroundColor = 'green';
        break;

        }
    console.log(log)

    }
);
