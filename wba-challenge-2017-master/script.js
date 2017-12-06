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
