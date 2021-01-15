const figure = document.getElementById("figure")

figure.onclick = function (){
    figure.classList.toggle('rounded') 
}

//いろんなイベント
const figure2 = document.getElementById("figure2")

figure2.onmouseover = function (){
    figure2.classList.toggle('rounded')
}

//△も！
const figure3 = document.getElementById("figure3")
let count=0
figure3.onclick = function (){
    count+=1
    if(count%3===1){
        figure3.classList.add('rounded')
    }else if(count%3===2){
        figure3.classList.remove('rounded')
        figure3.classList.add('triangle')
    }else{
        figure3.classList.remove('triangle')
    }
    
}