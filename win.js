var rule=document.querySelector(".rul");

let h1=document.querySelector(".ru");

var again=document.querySelector(".but");

var nex=document.querySelector(".nex");
rule.addEventListener("click",function(){
    var s1=" Games Rules \n\n1 Rock beats scissors, scissors beat \npaper, and paper beats rock.\n\n2 Agree ahead of time whether you’ll\n count off “rock, paper, scissors, shoot” \nor just “rock, paper, scissors.”\n\n3 Use rock, paper, scissors to settle\n minor decisions or simply play to pass\n the time\n\n4 If both players lay down the same hand,\n each player lays down another hand ";
    
    h1.innerHTML="<pre>" + s1 + "</pre>";
    
});

again.addEventListener("click",function(){
    window.location.assign("new.html");
});

nex.addEventListener("click",function(){
    window.location.assign("win.html");
});