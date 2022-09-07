function solution(answers) {
  var one = [1, 2, 3, 4, 5]
  var two = [2, 1, 2, 3, 2, 4, 2, 5]
  var three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  var total = []
  var answer = []
  const result = (arr, answers) => {
    for (var i = 0; i <= arr.length; i++) {
      if (answers.length - arr.length > 0) {
        arr.push(arr[i])
      } else if (answers.length - arr.length < 0) {
        arr.pop()
      } else if (answers.length == arr.length) {
        break
      }
    }
    return arr
  }

  const getAnswer = (arr, answers) => {
    var cnt = 0
    for (var i = 0; i < answers.length; i++) {
      if (arr[i] == answers[i]) cnt++
    }
    return cnt
  }

  total.push(getAnswer(result(one, answers), answers))
  total.push(getAnswer(result(two, answers), answers))
  total.push(getAnswer(result(three, answers), answers))

  const max = Math.max(...total)
  for (var i = 0; i < total.length; i++) {
    if (total[i] == max) answer.push(i + 1)
  }

  return answer
}