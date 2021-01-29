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
