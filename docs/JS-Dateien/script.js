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