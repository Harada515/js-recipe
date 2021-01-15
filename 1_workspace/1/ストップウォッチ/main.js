const display = document.getElementById("display")
const button = document.getElementById("button")

let count=0

const countUp=function(){
    //countを更新
    count+=1
    console.log(count) // 追加
    //count を秒単位にして表示
    display.textContent=count/100
}

// 実行中のタイマーのid
let id=null

button.onclick = function(){
    if (id === null) { // start
        id = setInterval(countUp, 10)
        button.textContent = "stop"
    } else { // stop
        clearInterval(id)
        id = null
        button.textContent = "start"
    }
}