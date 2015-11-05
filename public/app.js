(function() {
  var time = document.querySelector('.time');


  window.setInterval(() => {
    var d = new Date();
    console.log(d);
    var now = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    time.innerHTML = now;
  }, 1000);

})();
