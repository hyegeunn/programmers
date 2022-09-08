function solution(n) {
  var answer = n.toString().split('')
  var arr = []
  arr = answer.map(n => Number(n))
  return arr.reduce((a, c) => a + c)
}