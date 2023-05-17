
function comparar() {
  // Obtenemos los valores de los campos de texto
  var text1 = document.getElementById("text1").textContent;
  var text2 = document.getElementById("text2").textContent;

  // Conversion de textos a minusculas para hacer una comparacion mas exacta
  text1 = text1.toLowerCase().trim();
  text2 = text2.toLowerCase().trim();

  // Calculos de las longitudes de los textos
  var len1 = text1.length;
  var len2 = text2.length;

  // Un ciclo For que busca y compara similitudes en caracteres
  var matches = 0;
  for (var i = 0; i < len1; i++) {
      if (text2.indexOf(text1.charAt(i )) >= 0) {
          matches++;
      }
  }

  // Esta pequeña variable me almacena el calculo de la similitud en porcentaje
  var similarity = (matches / (len1 + len2)) * 200;
  similarity = Math.min(100, Math.max(1, similarity));
  localStorage.setItem("similarity", similarity);
  
  //Codigo añadido

  // Variables para desplegar mensajes finales en pantalla
  var resultElement = document.getElementById("result");
  var message = "Haz tenido un " + similarity.toFixed(2) + "% de de similitud.";

  // Agregamos el mensaje de acuerdo al resultado

  if (similarity >= 90) {
      message += " Vocalizas correctamente las palabras.";
  } 
  else if (similarity >= 70) {
      message += " No vocalizas correctamente las palabras.";
  }else if (similarity <= 60) {
      message += " Puedes mejorar, te recomiendo sigas practicando.";
  }
  
/*  

*/

  // Mostramos el mensaje completo
  resultElement.innerHTML = message;

  
  if (similarity >= 80) {

      var complete = document.getElementById('complete');
      
      complete.textContent = "Completado!";
  }
  }
