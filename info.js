var t=Math.floor((Math.random()*100)+1);
var count=0;

function Control(){
    var i=Number(document.getElementById("in1").value);
    if(t>1){
        count ++;
        document.getElementById("cc").innerHTML=count;
        document.getElementById("sonuc").innerHTML="Increase the number";

    }else if(t<i){
        count ++;
        document.getElementById("cc").innerHTML=count;
        document.getElementById("sonuc").innerHTML="Decrease the number";
    }else if(t==i){
        count ++;
        document.getElementById("cc").innerHTML=count;
        document.getElementById("sonuc").innerHTML="Congrats "+t;
    }
}