function init() {
    cur_time(); 
    elapsed();
}



function cur_time() {
    var dd = new Date(),
      h = addZero(dd.getHours()),
      m = addZero(dd.getMinutes());
    document.getElementById('cur_time').innerHTML = `${h}:${m}`;
    setInterval(function() {
      var dd = new Date(),
        h = addZero(dd.getHours()),
        m = addZero(dd.getMinutes());
      document.getElementById('cur_time').innerHTML = `${h}:${m}`;
    }, 60000);
  }

function elapsed() {
  setInterval(() => {
    var a, b;
    var e = performance.now(); 
    var tDiff = Math.round(e / 1000); 
    a = tDiff / 60; 
    a = Math.floor(a); 
    b = tDiff % 60; 
    document.getElementById('time').innerHTML = `${a}m${b}s elapsed.`; 
  }, 1000);
  } 