function solution(s) {
  var arr = s.split('')
  var pCnt = 0
  var yCnt = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'p' || arr[i] == 'P') {
      pCnt++
    } else if (arr[i] == 'y' || arr[i] == 'Y') {
      yCnt++
    }
  }
  if (pCnt != yCnt) {
    return false
  } else {
    return true
  }
}

