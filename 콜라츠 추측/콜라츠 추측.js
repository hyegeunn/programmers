function solution(num) {
  var cnt = 0
  if (num == 1) return 0

  for (var i = 0; i < 500; i++) {
    if (num % 2 == 0) {
      num = num / 2
      cnt++
    } else {
      num = num * 3 + 1
      cnt++
    }
    if (cnt >= 500) {
      cnt = -1
      break
    } else if (num == 1) {
      break
    }
  }
  return cnt
}
