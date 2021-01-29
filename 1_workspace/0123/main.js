const input = document.getElementById("input")
const addButton = document.getElementById("addbutton")
const display = document.getElementById("display")


    //入力した値を入れるリスト
    let list=[]

    //input内の文字をローカルストレージに保存
    input.oninput=function(){
        localStorage.inputValue = input.value
    }
    if (localStorage.inputValue){
        input.value = localStorage.inputValue
    }
    
addButton.onclick = function(){
    //内容を取り出す
    const text=input.value

    //textをリストに追加
    list.push(text)

    //listをJSON化する
    JSON.stringify(list)

    //  ローカルストレージにJSON化したリストを保存
    localStorage.list=JSON.stringify(list)

    //card を作る
    const card =document.createElement("div")
    card.textContent=text
    //displayに追加
    display.append(card)

    input.value = ''
}

//ローカルストレージのリストの内容を取り出す
//listが存在しない場合エラー
if (localStorage.list){
console.log(localStorage.list)


// 取り出したlistを配列に複合する
list=JSON.parse(localStorage.list)


//listの内容を一つずつdisplayに追加する
    for(let n=0;n<list.length;n++){
    //card を作る
    const card =document.createElement("div")
    card.textContent=list[n]
    //displayに追加
    display.append(card)
    }
}