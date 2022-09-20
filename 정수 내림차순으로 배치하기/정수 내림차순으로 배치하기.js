function solution(n) {
  var arr = (n + "").split("").sort((a, b) => b - a)
  var answer = ''
  for (var i = 0; i < arr.length; i++) {
    answer += arr[i]
  }
  return parseInt(answer)
}