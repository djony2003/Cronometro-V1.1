// Criar uma função com o objeto Date() para receber os segundos

const _cronometro = document.querySelector("._h3");
const _pause = document.querySelector("._pause");

let _seg = 0;
let timer = 0;

_start_Interval = () => {
  _cronometro.classList.remove("_pause_color");

  clearInterval(timer);

  function _recebe_Segundos(segundos) {
    const _data = new Date(segundos * 1000);
    const cronometro = _data.toLocaleTimeString("pt-br", {
      timeZone: "GMT",
    });
    _cronometro.innerHTML = cronometro;
    return cronometro;
  }

  function _inc_sec() {
    _seg++;
    console.log(_recebe_Segundos(_seg));
  }
  timer = setInterval(_inc_sec, 1000);
};

_pause_Interval = () => {
  clearInterval(timer);
  _cronometro.classList.add("_pause_color");
};

_stop_Interval = () => {
  clearInterval(timer);
  _seg = 0;
  _cronometro.classList.remove("_pause_color");
  _cronometro.innerHTML = "00:00:00";
};
