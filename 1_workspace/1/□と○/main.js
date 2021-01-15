const figure = document.getElementById("figure")

figure.onclick = function (){
    figure.classList.toggle('rounded') 
}

//いろんなイベント
const figure2 = document.getElementById("figure2")

figure2.onmouseover = function (){
    figure2.classList.toggle('rounded')
}