function buttonAlsAktivAnzeigen(id, id2){
    var e = document.getElementById(id);
    var f = document.getElementById(id2);
    if (e.className == "btn"){
       e.className = "btn is-active";
        f.className = "btn";
    } 
  }

  document.addEventListener('DOMContentLoaded', function(){
      document.getElementById('').addEventListener('click', function(){
        lineChart.config.secondPath = true;
        lineChart.render();
      })
  })