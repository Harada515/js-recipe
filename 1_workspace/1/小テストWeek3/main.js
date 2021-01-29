/*問６
const toMorseCode = function(x) {
  let list = []
  let n = x.split("")
  for (let i = 0; i < n.length; i++)
    if (n[i] === "0") {
      list.push("・")
    } else {
      list.push("-")
    }
  let tsunagu = list.join("")
  return tsunagu
}

console.log(toMorseCode("000111000"))
*/

const addAllNumbers = function(x) {
  let n = x.split("-") //["12","34","5"]
  let num = n.map(Number)
  let add = 0
  for (let i = 0; i < n.length; i++)
    if (i < n.length) {
      add = add + num[i]
    }
  return add
}

console.log(addAllNumbers("12-34-5"))
