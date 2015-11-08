(function() {

  var time = document.querySelector('.time');
  var line = document.querySelector('.line');

  window.setInterval(() => {
    var d = new Date();
    console.log(d);
    var nowHour = padZeros(d.getHours());
    var nowMin =  padZeros(d.getMinutes());
    var nowSec =  padZeros(d.getSeconds());
    var now = `${nowHour}:${nowMin}:${nowSec}`;
    time.innerHTML = now;
    console.log(nowSec / 60);
    line.style.width = (nowSec / 60 * 40 + 'rem');

  }, 1000);

  function padZeros(time) {
    if (time < 10) {
      return '0' + time;
    }

    return time;
  }



})();
