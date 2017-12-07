document.addEventListener('DOMContentLoaded', function(){
    lineChart.initData();

    document.getElementById('defaultButton').addEventListener('click', function() {
      if(!document.getElementById('defaultButton').classList.contains('is-active')){
      document.getElementById('defaultButton').classList.toggle('is-active');
      document.getElementById('diagramButton').classList.toggle('is-active');
      document.getElementById('table').classList.toggle('hide');
      document.getElementById('graph').classList.toggle('hide');
      }
    });

    document.getElementById('diagramButton').addEventListener('click', function() {
     if(!document.getElementById('diagramButton').classList.contains('is-active')){
      document.getElementById('defaultButton').classList.toggle('is-active');
      document.getElementById('diagramButton').classList.toggle('is-active');
      document.getElementById('table').classList.toggle('hide');
      document.getElementById('graph').classList.toggle('hide');
     }
    });

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

