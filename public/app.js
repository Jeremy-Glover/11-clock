(function() {
  var time = document.querySelector('.time');
  var line = document.querySelector('.line');
  var colorContainer = document.querySelector('.container');

  window.setInterval(() => {
    var d = new Date();
    console.log(d);
    var nowHour = padZeros(d.getHours());
    var nowMin =  padZeros(d.getMinutes());
    var nowSec =  padZeros(d.getSeconds());
    var now = `${nowHour}:${nowMin}:${nowSec}`;
    time.innerHTML = now;

    var colorHour = toColorRange(nowHour, 60);
    var colorMin = toColorRange(nowMin, 60);
    var colorSec = toColorRange(nowSec, 60);
    var colorApply = `rgb(${colorHour}, ${colorMin}, ${colorSec})`;
    colorContainer.style.background = colorApply;

    line.style.width = (nowSec / 60 * 40 + 'rem');
  }, 1000);

  var toColorRange = (number, base) => {
    return Math.floor(number / base * 255);
  };

  function padZeros(time) {
    if (time < 10) {
      return '0' + time;
    }

    return time;
  }

})();
