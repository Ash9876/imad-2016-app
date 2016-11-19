
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

var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                 var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://ash9876.imad.hasura-app.io/counter',true);
    request.send(null);
   
};

var submit=document.getElementById("submitbtn");
submit.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list="";
                for(var i=0;i<names.length;i++)
                {
                   list+='<li>'+names[i]+'</li>';
                }
            var ul=document.getElementById("namelist");
            ul.innerHTML=list;
            }
        }
    };
    var nameinput=document.getElementById("name");
    var name=nameinput.value;
    request.open('GET','http://ash9876.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};