function solution(s) {
  var str = s.split(" ")
  var answer = []

  for (var i = 0; i < str.length; i++) {
    var arr = str[i].split("")
    for (var j = 0; j < arr.length; j++) {
      if (j % 2 == 0) {
        arr[j] = arr[j].toUpperCase()
      } else {
        arr[j] = arr[j].toLowerCase()
      }
    }
    answer.push(arr.join(""))
  }
  return answer.map((a) => a + " ").join("").slice(0, -1)
}