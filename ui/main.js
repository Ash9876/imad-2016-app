
var img1="http://i.ebayimg.com/images/g/bj8AAOxyXDhSgmRm/s-l300.jpg";
var img2="https://s-media-cache-ak0.pinimg.com/236x/af/a5/a9/afa5a926dd91ff40eebfd62249056287.jpg";
var img=document.getElementById("img");


function change(){
    if(img.src==img1){
   img.src=img2;
    }
   else
   img.src=img1;
}

setInterval(change,1000);

var treat=document.getElementById('treat');
var sheet=document.getElementById('sheet');
var firstval=document.getElementById('firstval');
treat.onclick=function(){
        
        firstval.innerHTML=` I walked across the street <br>
                So I could buy a treat`;
                treat.value='some';
    };
    sheet.onclick=function(){
        
        firstval.innerHTML=` I walked across the street <br>
                So I could buy a sheet`;
                sheet.value='yum';
    };

