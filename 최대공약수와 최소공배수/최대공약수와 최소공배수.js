
function solution(n, m) {
  var answer = []
  var num = [n, m]
  num.sort((a,b)=>a-b)
  for (var i = num[1]; i >= 1; i--){
    if (num[0] % i == 0 && num[1] % i == 0) {
      answer.push(i)
      break
    }
  }
  if (num[1] % num[0] == 0) {
    answer.push(num[1])
  } else {
    let cnt = 1
    while (true) {
      if ((cnt % num[0] == 0) && (cnt % num[1] == 0)) {
        answer.push(cnt)
        break;
      }
      cnt++;
    }
  }
  return answer
}