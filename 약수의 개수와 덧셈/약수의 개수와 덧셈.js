function solution(left, right) {
  var arr = []
  var answer = 0
  for (var i = left; i <= right; i++) {
    arr = []
    for (var j = 1; j <= i; j++) {
      if (i % j == 0) {
        arr.push(j)
      }
    }
    if (arr.length % 2 == 0) {
      answer += i
    } else {
      answer -= i
    }
  }
  return answer
}