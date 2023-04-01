// Fecha y hora de finalización de la oferta (en este caso, dentro de 6 horas)
let fechaFinalizacion = new Date().getTime() + (6 * 60 * 60 * 1000);

// Actualiza el contador cada segundo
let temporizador = setInterval(function() {

  // Obtener la fecha y hora actual
  let fechaActual = new Date().getTime();
    
  // Calcular la diferencia entre la fecha de finalización y la actual
  let diferencia = fechaFinalizacion - fechaActual;
    
  // Calcula el tiempo restante en horas, minutos y segundos
  let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
  // Muestra el tiempo restante en el contador
  document.getElementById("cuentaRegresiva").innerHTML = "<div class='tiempo'><div>" + horas + "h "+"</div><div>" + minutos + "m"+"</div><div>" + segundos + "s"+"</div></div>";
    
  // Si el contador llega a cero, reiniciar el contador en 6 horas
  if (diferencia < 0) {
    fechaFinalizacion = new Date().getTime() + (6 * 60 * 60 * 1000);
  }
}, 1000);

//2 contador


let temporizador2 = setInterval(function() {

  // Obtener la fecha y hora actual
  let fechaActual = new Date().getTime();
    
  // Calcular la diferencia entre la fecha de finalización y la actual
  let diferencia = fechaFinalizacion - fechaActual;
    
  // Calcula el tiempo restante en horas, minutos y segundos
  let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
  // Muestra el tiempo restante en el contador
  document.getElementById("cuentaRegresiva-2").innerHTML = "<div class='tiempo'><div>" + horas + "h "+"</div><div>" + minutos + "m"+"</div><div>" + segundos + "s"+"</div></div>";
    
  // Si el contador llega a cero, reiniciar el contador en 6 horas
  if (diferencia < 0) {
    fechaFinalizacion = new Date().getTime() + (6 * 60 * 60 * 1000);
  }
}, 1000);


