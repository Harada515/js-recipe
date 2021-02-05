//画像切り替え
const gazo = document.getElementsByid("gazo")
let img = new Array()
img[0] = new Image()
img[0].src = "shinjuku/00.JPG"
img[1] = new Image()
img[1].src = "shinjuku/01.JPG"
img[2] = new Image()
img[2].src = "shinjuku/02.JPG"
img[3] = new Image()
img[3].src = "shinjuku/03.JPG"
img[4] = new Image()
img[4].src = "shinjuku/04.JPG"
let count1 = 0
gazo.onclick = function changeIMG() {
  if (count1 == 4) {
    count1 = 0
  } else {
    count1++
  }
  src = img[count1].src
}

//カウンター
const display = document.getElementById("display")

let count = 0

const countUp = function() {
  //countを更新
  count += 1 // 追加
  //count を秒単位にして表示
  display.textContent = count / 100
}

window.onload = function() {
  setInterval(countUp, 10)
}
