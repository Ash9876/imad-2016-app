
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

var input={
    value1:'some',
    value2:'um'
};

function template(data){
    var value2=data.value2;
    var value1=data.value1;
   var temp=`<input type='submit' class='submit' value=${value2} id=${value2}>
                    <input type='submit' class='submit' value=${value1} id=${value1}>`;
                    return temp;
}

var treat=document.getElementById('treat');
var sheet=document.getElementById('sheet');
var firstval=document.getElementById('firstval');
treat.onclick=function(){
        
        firstval.innerHTML=` I walked across the street <br>
                So I could buy a treat
                <br>`;
                 template(input) ;
    };
    sheet.onclick=function(){
        
        firstval.innerHTML=` I walked across the street <br>
                So I could buy a sheet
                <br>
                    <input type='submit' class='submit' value='hey' id='hey'>
                    <input type='submit' class='submit' value='yay' id='yay'>`;
                
    };

