const display = document.getElementById("display");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const twiceButton = document.getElementById("twice-button");
let count=0

plusButton.onclick=function(){
count+=1
display.textContent=count
}
minusButton.onclick=function(){
    count-=1
    display.textContent=count
}
twiceButton.onclick=function(){
    count=count*2
    display.textContent=count
}
//ここから電卓//
const display2=document.getElementById("display2");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const equal=document.getElementById("equal");
let n=0
let x=0

one.onclick=function(){
    x=1;
    display2.textContent=1
    }
two.onclick=function(){
    x=2;
    display2.textContent=2
    }
three.onclick=function(){
        x=3;
        display2.textContent=3
    }
plus.onclick=function(){
    n=n+x;
    display2.textContent="+"
    }
minus.onclick=function(){
    n=n-x;
    display2.textContent="-"
    }

equal.onclick=function(){
    display2.textContent=n
}