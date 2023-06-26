let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;


let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  clearInterval(cron);
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}


function Tema()
{

  
  tema = document.getElementById('tema').innerText;
  switch(tema)
  {
    case 'Claro': 
    {
      document.getElementById('tema').innerText = 'Escuro';
      var estilo = document.getElementById('estilo');
      estilo.setAttribute("href", "Style/Claro.css");
      break;
    }
    case 'Escuro':
      {
        document.getElementById('tema').innerText = 'Claro';
        var estilo = document.getElementById('estilo');
        estilo.setAttribute("href", "Style/Escuro.css");
        break;
      }
  }
} 

