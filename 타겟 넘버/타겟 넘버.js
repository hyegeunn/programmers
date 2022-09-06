function solution(numbers, target) {
  let answer = 0
  let length = numbers.length;
  dfs(0,0)
  function dfs(idx, sum) {
    if (idx === length) {
      if (sum === target) {
        answer++
      }
      return
    }

    dfs(idx + 1, sum + numbers[idx])
    dfs(idx + 1, sum - numbers[idx])
    
  }
  return answer
}