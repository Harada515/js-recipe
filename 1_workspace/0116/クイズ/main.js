const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")
const button4=document.getElementById("button4")
const display1=document.getElementById("display1")
const display2=document.getElementById("display2")

//const feedbacks=["不正解","正解","不正解"]
//feedbacks 


const choose=function(n){
    if (n===1){
        display1.textContent="正解"
    }else {
        display1.textContent="不正解"
    }
}


button1.onclick=function(){
    choose(0)
 }
 button2.onclick=function(){
    choose(1)
 }
 button3.onclick=function(){
    choose(0)  
 }

button4.onclick=function(){
    display2.textContent="櫻井翔くんのラップが好きです"
}