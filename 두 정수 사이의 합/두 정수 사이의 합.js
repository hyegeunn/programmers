function solution(a, b) {
  var answer = []
  var total = 0
  if (a > b) {
    for (var i = b; i <= a; i++) answer.push(i)
    total = answer.reduce((a, c) => a + c)
  } else if (a < b) {
    for (var i = a; i <= b; i++) answer.push(i)
    total = answer.reduce((a, c) => a + c)
  } else {
    total = a
  }

  return total
}