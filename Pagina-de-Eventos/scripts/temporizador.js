    // Define a data do evento
    const eventDate = new Date("2023-07-01T09:30:00").getTime();

    // Atualiza o contador a cada segundo
    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      // Cálculos de tempo
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Exibe o contador no elemento correspondente
      document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
      document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
      document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

      // Se o contador regressivo terminar, exibe uma mensagem
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<span class='event-ended'>O torneio começou!</span>";
      }
    }, 1000);