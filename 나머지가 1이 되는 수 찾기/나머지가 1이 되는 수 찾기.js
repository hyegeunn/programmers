function solution(n) {
  var arr = []
  for (var i = 2; i < n; i++) {
    if (n % i == 1) {
      arr.push(i)
    }
  }
  return Math.min(...arr)
}