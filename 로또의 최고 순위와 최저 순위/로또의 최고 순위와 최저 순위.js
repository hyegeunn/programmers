function solution(lottos, win_nums) {
  var answer = []
  var min = 0
  var max = 0
  lottos.sort((a, b) => a - b)
  win_nums.sort((a, b) => a - b)
  for (var i = 0; i < lottos.length; i++) {
    for (var j = 0; j < win_nums.length; j++) {
      if (lottos[i] == win_nums[j]) min++
    }
    if (lottos[i] == 0) max++
  }
  answer.push(7 - (max + min))
  answer.push(7 - min)
  if (min == 0 && max != 0) {
    answer = [1, 6]
  } else if (min == 0 && max == 0) {
    answer = [6, 6]
  }
  return answer
}