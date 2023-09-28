function nota(nota) {
  var numero1 = parseInt(prompt("Introduce tu nota:"));
  var x = document.getElementById("div2");

  document.getElementById("div1").innerHTML = ("Tu nota es : " + numero1);

  (numero1 < 0 || numero1 > 10) ? x.innerHTML = ("Nota incorrecta") :
    (numero1 < 5) ? x.innerHTML = ("Suspenso") :
      (numero1 < 7) ? x.innerHTML = ("Aprobado") :
        (numero1 < 9) ? x.innerHTML = ("Notable") :
          x.innerHTML = ("Sobresaliente");
}
