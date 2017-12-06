function buttonAlsAktivAnzeigen(id, id2, id3, id4, id5){
    
    var e = document.getElementById(id);
    var f = document.getElementById(id2);
    var g = document.getElementById(id3);
    var h = document.getElementById(id4);
    var i = document.getElementById(id5);
    
    if (e.className == "btn"){
       e.className = "btn is-active";
        f.className = "btn";
        g.style.display = "none";
        h.style.display = "none";
        i.style.display = "none";
    }   
    
  }



function buttonAlsAktivAnzeigen2(id, id2, id3, id4, id5){
    
    var e = document.getElementById(id);
    var f = document.getElementById(id2);
    var g = document.getElementById(id3);
    var h = document.getElementById(id4);
    var i = document.getElementById(id5);
    
    if (e.className == "btn is-active"){
       e.className = "btn";
        f.className = "btn is-active";
        g.style.display = "";
        h.style.display = "";
        i.style.display = "";
    }   
    
  }

document.addEventListener('DOMContentLoaded', function(){
    lineChart.initData();

    document.getElementById('defaultButton').addEventListener('click', function() {
      document.getElementById('defaultButton').classList.toggle('is-active');
      document.getElementById('diagramButton').classList.toggle('is-active');
      document.getElementById('table').style.display = "";


    })

    document.getElementById('secondPath').addEventListener('click', function(){
      if(lineChart.config.secondPath == false){
      lineChart.config.secondPath = true;
      lineChart.render();
      document.getElementById('secondPath').value = 'Letzte Fahrt verbergen';
      } else {
        lineChart.config.secondPath = false;
        lineChart.render();
        document.getElementById('secondPath').value = 'Letzte Fahrt anzeigen';
      }
    })
})

