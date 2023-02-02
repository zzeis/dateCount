
var year = new Date();
var year = year.getFullYear();
// Data alvo
var targetDate = new Date(year+'-03-09');

// Atualiza a cada 1 segundo
setInterval(function() {
  var now = new Date();

  // Calcular a diferença em milissegundos
  var timeDiff = targetDate - now;

  // Calcular o tempo restante em dias, horas e segundos
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Exibir o tempo restante
  console.log(days + " dias, " + hours + " horas, " + minutes + " minutos e " + seconds + " segundos restantes.");
}, 1000);
