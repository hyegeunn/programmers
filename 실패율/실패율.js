
function solution(N, stages) {
  var answer = []
  var failRate = []
  var cnt = 0
  var length = stages.length
  for (var j = 1; j <= N; j++) {
    length -= cnt
    cnt=0
    for (var i = 0; i < stages.length; i++){
      if (stages[i] == j) {
        cnt++
      }
    }
    failRate.push([cnt / length,j])
  }
  failRate.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return b[0] - a[0]
    }
  })
  for (var i = 0; i < failRate.length; i++){
    answer.push(failRate[i][1])
  }
  return answer
}