function solution(x, n) {
  var arr = [x]
  var num = x
  for (var i = 1; i < n; i++) {
    x += num
    arr.push(x)
  }
  return arr
}