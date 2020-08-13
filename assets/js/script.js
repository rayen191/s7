/*
alert("hello world");
document.write("hello world");
console.log("hello world");
 /*
 var x=Number( prompt("donner un noumbre"));
 var y=Number( prompt("donner un noumbre"));
 document.write("<h1>la somme de" + x +"+" + y +"="+  (x+y)+ "</h1>");
 */
/*
var x=Number( prompt("donner un noumbre"));
 var y=Number( prompt("donner un noumbre"));
 */
/*
function somme(){
var x=5;
var y=10;
if(isNaN(x) ||isNaN(y)){
    /*
    document.write("saisir un nombre")
}    
    else{
        document.write("<h1>la somme de" + x +"+" + y +"="+  (x+y)+ "</h1>");


    }*/
    /*
    console.log("saisir un nombre")
}    
    else{
       console.log("<h1>la somme de" + x +"+" + y +"="+  (x+y)+ "</h1>");
    }
    return false;
    */
   /*
  selectionner par nom:
function somme(){
var x=Number( document.f1.nb1.value);
var y= Number( document.f1.nb2.value);
if(isNaN(x) ||isNaN(y)){
    console.log("saisir un nombre")
}
    else{
        console.log("la somme de" + x +"+" + y +"="+  (x+y)+ "");
     }
     return false;
     }
     */
    /*par id */
    function somme(){
        var x=Number( document.getElementById("nb1") .value)
        var y= Number( document.getElementById("nb2").value)
        if(isNaN(x) ||isNaN(y)){
            console.log("saisir un nombre")
        }
            else{
                console.log("la somme de" + x +"+" + y +"="+  (x+y)+ "");
             }
             return false;
             }
        
