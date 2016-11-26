

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
    },
    input3:{
        value1:'table',
        value2:'man',
        poem:`I walked across the street <br>
            so I could buy a treat<br>
             I walked into the store <br>
            To buy something to eat<br>
            i bought a piece of pastry<br>
            the pastry tasted good/bad<br>
            and so i felt content<br>
            but walked into a<br>`
    },
    input4:{
        value1:'table',
        value2:'man',
        poem:`I walked across the street <br>
            so I could buy a treat<br>
             I walked into the store <br>
            To buy something to munch<br>
            i bought a piece of biscuit<br>
            the pastry tasted good/bad<br>
            and so i felt content<br>
            but walked into a<br>`
     }
};

function template(data){
    var value2=data.value2;
    var value1=data.value1;
    var poem=data.poem;
    var temp=`${poem}<br><br><input type='submit' class='submit' value=${value1} id=${value1}>
                    <input type='submit' class='submit' value=${value2} id=${value2}>`;
                    return temp;
}


var options={
    o1:document.getElementById(inputs.input0.value1),
    o2:document.getElementById(inputs.input0.value2),
    o3:document.getElementById(inputs.input1.value1),
    o4:document.getElementById(inputs.input1.value2),
    o5:document.getElementById(inputs.input2.value1),
    o6:document.getElementById(inputs.input2.value2),
    o7:document.getElementById(inputs.input3.value1),
    o8:document.getElementById(inputs.input3.value2),
    o9:document.getElementById(inputs.input4.value1),
    o10:document.getElementById(inputs.input4.value2),
    o11:document.getElementById(inputs.input5.value1),
    o12:document.getElementById(inputs.input5.value2)
};



var firstval=document.getElementById('firstval');
options.o1.onclick=function(){
        firstval.innerHTML=template(inputs.input1);
        
        options.o3.onclick=function(){
        firstval.innerHTML=template(inputs.input3);
         };
        options.o4.onclick=function(){
        firstval.innerHTML=template(inputs.input4);
        };
    };
    
options.o2.onclick=function(){
        firstval.innerHTML=template(inputs.input2);
        
        options.o5.onclick=function(){
        firstval.innerHTML=template(inputs.input5);
         };
        options.o6.onclick=function(){
        firstval.innerHTML=template(inputs.input6);
        };
    };
