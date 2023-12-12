puntuacion = 0

    function color(fila, columna) {
        //Los parametros son las pocisiones
        //de la tabla html donde se van a cambiar el color
        //y las pocisiones en el array de donde
        //se van a sacar los datos para la comprobacion

        if (tablero[fila][columna] == 3) {
            document.getElementById("td" + fila + "p" + columna).style.backgroundColor = "#00FF00";
            document.getElementById("td" + fila + "p" + columna).style.color = "#000000";
        } else if (tablero[fila][columna] == 2){
            document.getElementById("td" + fila + "p" + columna).style.backgroundColor = "#81FF81";
            document.getElementById("td" + fila + "p" + columna).style.color = "#000000";
        } else if (tablero[fila][columna] == 1){
            document.getElementById("td" + fila + "p" + columna).style.backgroundColor = "#C8FFC8";
            document.getElementById("td" + fila + "p" + columna).style.color = "#000000";
        }
    }
    function perdiste() {
        window.location.reload()
        alert('Perdiste, crea un nuevo tablero por favor')
    }
    function condicional(fila, columna) {
        return tablero[fila][columna] == null ? perdiste() : "<strong>" + tablero[fila][columna] + "</strong>"
    }
    function imprimir(fila, columna) {
        //Los parametros son las pocisiones
        //de la tabla html donde se van a colocar los datos
        //y las pocisiones en el array de donde
        //se van a sacar los datos

        puntuacion += tablero[fila][columna] == null ? 0: tablero[fila][columna]
        document.getElementById("ll" + fila + "p" + columna).innerHTML = condicional(fila, columna)
        document.getElementById("totalp").innerHTML = "TOTAL P:" + "<br>" + puntuacion
        document.getElementById("l" + fila + "p" + columna).innerHTML = ""
        color(fila, columna)

        if (total == puntuacion) {
            alert('Ganaste, sigue jugando')
            generar(puntuacion)
            total += puntuacion
        }
    }


    function generar(puntoos) {
        total = 0
        puntuacion = puntoos
        sumapc = 0
        bombasc = 0
        sumapf = 0
        bombasf = 0
        tablero = new Array(5)


        //Creo el arraymultidimensional
        //

        for (i = 0; i < tablero.length; i++) {
            tablero[i] = new Array(5)
        }

        //Generar array multidimensional con numeros aleatorios
        //en posiciones aleatorias y con huecos aleatorios

        for (i = 0; i < 21; i++) {
            fila = Math.floor(Math.random() * 5)
            columna = Math.floor(Math.random() * 5)
            tablero[fila][columna] = Math.floor((Math.random() * 3) + 1)

        }
        console.log(tablero)

        //Contar puntos y bombas columnas
        //

        for (i = 0; i < 5; i++) {
            for (i2 = 0; i2 < 5; i2++) {
                sumapc += tablero[i2][i] == null ? 0 : tablero[i2][i]
                bombasc += tablero[i2][i] == null ? 1 : 0
                document.getElementById("columna" + i).innerHTML ="P: " +  sumapc + "<br>" + "B: " + bombasc

            }
            sumapc = 0
            bombasc = 0
        }

        //Contar puntos y bombas fila
        //

        for (i = 0; i < 5; i++) {
            for (i2 = 0; i2 < 5; i2++) {
                sumapf += tablero[i][i2] == null ? 0 : tablero[i][i2]
                bombasf += tablero[i][i2] == null ? 1 : 0
                document.getElementById("fila" + i).innerHTML ="P: " +  sumapf + "<br>" + "B: " + bombasf

            }
            sumapf = 0
            bombasf = 0
        }

        //Puntos a cero o los mismos si ganas
        //

        document.getElementById("totalp").innerHTML = "P: " + puntoos


        for (i = 0; i < 5; i++) {
            for (i2 = 0; i2 < 5; i2++) {
                // Volver a colocar las fotos en cada celda de la tabla
                //

                document.getElementById("ll" + i + "p" + i2).innerHTML = '<img src="pokemon.png" width="50px" height="50px" alt="Campo">'

                //Resetear el color
                //

                document.getElementById("td" + i + "p" + i2).style.backgroundColor = "white";
                document.getElementById("td" + i + "p" + i2).style.color = "#000000";

                //Al  pulsar el boton este se elimina
                //Aqui se vuelven a generar los botones con cada nuevo tablero
                //

                document.getElementById("l" + i + "p" + i2).innerHTML = '<button onclick=' + '"imprimir(' + i  + ',' +  i2 + ');"' + '>&#9760</button>'
            }
        }

        //Cuenta maximo de puntos para ganar
        //

        for (i = 0; i < 5; i++) {
            for (i2 = 0; i2 < 5; i2++) {
                total += tablero[i][i2] == null ? 0: tablero[i][i2]
            }
        }
    }
