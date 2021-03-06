const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
/*四択問題
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
*/
const feedback = document.getElementById("feedback")

//選択肢の数と答えの表示
const choice1 = document.createElement("input");
choice1.type="button";
const choice2 = document.createElement("input");
choice2.type="button";
const choice3 = document.createElement("input");
choice3.type="button";
const choice4 = document.createElement("input");
choice4.type="button";


// クイズの内容
const quiz = {
  text: "この犬の名前は何でしょう？",
  image: "dog.jpg",
  choices: [
    {
      text: "くぅ",
      feedback: "正解！うちの犬です。"
    },
    {
      text: "まろん",
      feedback: "残念！近所のドッグカフェの犬です。"
    },
    {
      text: "さくら",
      feedback: "残念！ドックカフェであった仲良しの犬です。"
    },
    {
      text: "クレア",
      feedback: "残念！友達の家の犬です。"
    }
  ]
}

// quiz を画面に表示する関数
const reloadQuiz = function(){
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function(){
choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
