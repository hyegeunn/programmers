function solution(progresses, speeds) {
  var answer = []
  var needs = []
  var need = 0
  for (var i = 0; i < progresses.length; i++) {
    need = (100 - progresses[i]) / speeds[i]
    if (!Number.isInteger(need)) need = parseInt(need) + 1
    needs.push(need)
  }
  var cnt = 1
  var max = needs[0]
  for (var i = 1; i < needs.length; i++) {
    if (max >= needs[i]) {
      cnt++
    } else {
      max = needs[i]
      answer.push(cnt)
      cnt = 1
    }
  }
  answer.push(cnt)
  return answer
}


