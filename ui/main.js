

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
            the pastry tasted good<br>
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
            the pastry tasted good<br>
            and so i felt content<br>
            but walked into a<br>`
     },
     input5:{
        value1:'look',
        value2:'shove',
        poem:`I walked across the street <br>
            so I could buy a treat<br>
             I walked into the store <br>
            To buy something to eat<br>
            i bought a piece of pastry<br>
            the pastry tasted good<br>
            and so i felt content<br>
            but walked into a table<br>
            ouch! that hurt i said<br>
            and gave the table a <br>
            `
     },
     input6:{
        value1:null,
        value2:null,
        poem:`I walked across the street <br>
            so I could buy a treat<br>
             I walked into the store <br>
            To buy something to eat<br>
            i bought a piece of pastry<br>
            the pastry tasted good<br>
            and so i felt content<br>
            but walked into a man<br>
            ouch! that hurt i said<br>
            and looked up fuming with rage<br>
            he was large and scary<br>
            my rage replaced by fear<br>
            'im sorry' the man said<br>
            that kept my fear down<br>
            because not spoke, he squeaked<br>
            so, before i burst into laughter<br>
            I walked onto the street<br>`
     },
     input7:{
        value1:null,
        value2:null,
        poem:`I walked across the street <br>
            so I could buy a treat<br>
             I walked into the store <br>
            To buy something to eat<br>
            i bought a piece of pastry<br>
            the pastry tasted good<br>
            and so i felt content<br>
            but walked into a table<br>
            ouch! that hurt i said<br>
            and gave the table a look<br>
            oh what use is it, i thought<br>
            for its just a table<br>
            so i left the store <br>
            and walked back onto the street<br>`
     },
     input8:{
        value1:'pay',
        value2:'leave',
        poem:`I walked across the street <br>
            so I could buy a treat<br>
             I walked into the store <br>
            To buy something to eat<br>
            i bought a piece of pastry<br>
            the pastry tasted good<br>
            and so i felt content<br>
            but walked into a table<br>
            ouch! that hurt i said<br>
            and gave the table a shove<br>
            the table lost its balance thus<br>
            and toppled over into a mess<br>
            the owner came rushing and cried<br>
            oh dear what a mess <br>
            you must pay for it he said<br>
            i apologized to him profusely<br>
            and turned around to <br>`
     },
     input9:{
        value1:null,
        value2:null,
        poem:`I walked across the street <br>
            so I could buy a treat<br>
             I walked into the store <br>
            To buy something to eat<br>
            i bought a piece of pastry<br>
            the pastry tasted good<br>
            and so i felt content<br>
            but walked into a table<br>
            ouch! that hurt i said<br>
            and gave the table a shove<br>
            the table lost its balance thus<br>
            and toppled over into a mess<br>
            the owner came rushing and cried<br>
            oh dear what a mess <br>
            you must pay for it he said<br>
            i apologized to him profusely<br>
            and turned around to pay<br>
            he took the money, counted it<br>
            and looked at me for a moment<br>
            before he said, 'alright,<br>
            you've covered the mess you made<br>
            and so i went in for just one pastry<br>
            and went out paying for all of them!<br>`
     },
     input10:{
        value1:null,
        value2:null,
        poem:`I walked across the street <br>
            so I could buy a treat<br>
             I walked into the store <br>
            To buy something to eat<br>
            i bought a piece of pastry<br>
            the pastry tasted good<br>
            and so i felt content<br>
            but walked into a table<br>
            ouch! that hurt i said<br>
            and gave the table a shove<br>
            the table lost its balance thus<br>
            and toppled over into a mess<br>
            the owner came rushing and cried<br>
            oh dear what a mess <br>
            you must pay for it he said<br>
            i apologized to him profusely<br>
            and turned around to leave<br>
            but my way was blocked i saw<br>
            by two large people<br>
            'did u think'the owner said<br>
            you could leave before you pay<br>
            and so i went in for just one pastry<br>
            and went out paying for all of them!<br>`
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

function last(data){
    var poem=data.poem;
    var temp=`Here's your complete poem<br><br>${poem}<br><br><a href='poem.html'>Play again</a>`;
    return temp;
}


var option6=document.getElementById(inputs.input2.value2);
  var  option7=document.getElementById(inputs.input3.value1);
  var  option8=document.getElementById(inputs.input3.value2);
var option9=document.getElementById(inputs.input4.value1);
var option10=document.getElementById(inputs.input4.value2);


var option1=document.getElementById(inputs.input0.value1);
var option2=document.getElementById(inputs.input0.value2);
var firstval=document.getElementById('firstval');

option1.onclick=function(){
        firstval.innerHTML=template(inputs.input1);
        var option3=document.getElementById(inputs.input1.value1);
        option3.onclick=function(){
        firstval.innerHTML=template(inputs.input3);
            var option5=document.getElementById(inputs.input3.value1);
            option5.onclick=function(){
            firstval.innerHTML=template(inputs.input5);
                var option7=document.getElementById(inputs.input5.value1);
                option7.onclick=function(){
                firstval.innerHTML=last(inputs.input7);
            
                };
                var option8=document.getElementById(inputs.input5.value2);
                option8.onclick=function(){
                firstval.innerHTML=template(inputs.input8);
                    var option9=document.getElementById(inputs.input8.value1);
                    option9.onclick=function(){
                    firstval.innerHTML=last(inputs.input9);
            
                    };
                    var option10=document.getElementById(inputs.input8.value2);
                    option10.onclick=function(){
                    firstval.innerHTML=last(inputs.input10);
                
                    };
                };
            };
            var option6=document.getElementById(inputs.input3.value2);
            option6.onclick=function(){
            firstval.innerHTML=last(inputs.input6);
                
            };
         };
        var option4=document.getElementById(inputs.input1.value2);
        option4.onclick=function(){
        firstval.innerHTML=template(inputs.input4);
        var option5=document.getElementById(inputs.input3.value1);
            option5.onclick=function(){
            firstval.innerHTML=template(inputs.input5);
                var option7=document.getElementById(inputs.input5.value1);
                option7.onclick=function(){
                firstval.innerHTML=last(inputs.input7);
            
                };
                var option8=document.getElementById(inputs.input5.value2);
                option8.onclick=function(){
                firstval.innerHTML=template(inputs.input8);
                    var option9=document.getElementById(inputs.input8.value1);
                    option9.onclick=function(){
                    firstval.innerHTML=last(inputs.input9);
            
                    };
                    var option10=document.getElementById(inputs.input8.value2);
                    option10.onclick=function(){
                    firstval.innerHTML=last(inputs.input10);
                
                    };
                };
        };
    };
};
    
option2.onclick=function(){
        firstval.innerHTML=template(inputs.input2);
    };
