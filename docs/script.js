function textAusUndEinklappen(id){
    var e = document.getElementById(id);
     
    if (e.style.display == "none"){
       e.style.display = "";
    } else {
       e.style.display = "none";
    }
  }

document.addEventListener('DOMContentLoaded', function(){
    lineChart.initData();



    document.getElementById('secondPath').addEventListener('click', function(){
      if(lineChart.config.secondPath == false){
      lineChart.config.secondPath = true;
      lineChart.render();
      document.getElementById('secondPath').innerHTML = 'Letzte Fahrt verbergen';
      } else {
        lineChart.config.secondPath = false;
        lineChart.render();
        document.getElementById('secondPath').innerHTML = 'Letzte Fahrt anzeigen';
      }
    });
});