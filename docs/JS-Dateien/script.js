function textAusUndEinklappen(id){
    var e = document.getElementById(id);
     
    if (e.style.display == "none"){
       e.style.display = "";
    } else {
       e.style.display = "none";
    }
  }

function timeFunction(km) {
    window.setTimeout(function() {

      lineChart.pushCurrentPath(lineChart.currentPathEnergy + Math.floor((Math.random() * 3.5) + 1));
      lineChart.render();
      if(lineChart.currentPathKm < km) {
        timeFunction(km);
      }

    }, 1000);
  }

document.addEventListener('DOMContentLoaded', function(){
    lineChart.initData();

    document.getElementById('start-btn').addEventListener('click', function() {
      lineChart.newPath();
      lineChart.render();
      timeFunction( +document.getElementById('km-tb').value );
      document.getElementById('km-tb').value = '';
    });


    document.getElementById('secondPath').addEventListener('click', function(){
      if(lineChart.config.secondPath == false){
      lineChart.config.secondPath = true;
      lineChart.render();
      document.getElementById('legendeb').classList.toggle('hide');
      document.getElementById('secondPath').innerHTML = 'HIDE LAST RIDE';
      } else {
        lineChart.config.secondPath = false;
        lineChart.render();
        document.getElementById('legendeb').classList.toggle('hide');
        document.getElementById('secondPath').innerHTML = 'SHOW LAST RIDE';
      }
    });
});