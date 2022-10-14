function solution(numbers, hand) {

  const find = (key) => {
    let pad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']]
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (pad[i][j] == key) {
          return [i, j]
        }
      }
    }
  }

  var answer = ''
  let left = '*'
  let right = '#'
  for (let i of numbers) {
    if (i == 1 || i == 4 || i == 7) {
      answer += 'L'
      left = i
    } else if (i == 3 || i == 6 || i == 9) {
      answer += 'R'
      right = i
    } else {
      let r_pos = find(right)
      let l_pos = find(left)
      let middle = find(i)
      let r_length = Math.abs(r_pos[0] - middle[0]) + Math.abs(r_pos[1] - middle[1])
      let l_length = Math.abs(l_pos[0] - middle[0]) + Math.abs(l_pos[1] - middle[1])
      if (r_length === l_length) { 
        hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L')
      } else if (r_length > l_length) { 
        answer += 'L'
        left = i
      } else {
        answer += 'R'
        right = i
      }
    }
  }
  return answer
}