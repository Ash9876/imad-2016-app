
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



var inputs={
    input0:{
      value1:'treat',
      value2:'sheet'
    },
    input1:{
    value1:'eat',
    value2:'munch',
    poem:` I walked across the street <br>
                So I could buy a treat<br>
                I walked into the store <br>
            To buy something to 
                <br>`
    },
    input2:{
        value1:'poem',
        value2:'story',
        poem:`I walked across the street <br>
            so I could buy a sheet<br>
            of paper from the store<br>
            to write a little <br>`
    }
    
};

function template(data){
    var value2=data.value2;
    var value1=data.value1;
    var poem=data.poem;
   var temp=`${poem}<br><br><input type='submit' class='submit' value=${value2} id=${value2}>
                    <input type='submit' class='submit' value=${value1} id=${value1}>`;
                    return temp;
}

var a=inputs;
var second=inputs.input0.value2;
var next1=inputs.input1;
var next2=inputs.input2;

var option1=document.getElementById(a[0].value1);
var option2=document.getElementById(second);
var firstval=document.getElementById('firstval');

option1.onclick=function(){
        firstval.innerHTML=template(next1);
        first=inputs.input1.value1;
        second=inputs.input1.value2;
        next1=inputs.input3;
    };
    
option2.onclick=function(){
        firstval.innerHTML=template(next2);
        first=inputs.input2.value1;
        second=inputs.input2.value2;
    };


