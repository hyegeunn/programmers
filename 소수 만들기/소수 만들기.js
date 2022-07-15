
function solution(nums) {
  var total = 0
  var answer = 0
  for (var i = 0; i < nums.length; i++){
    for (var j = i+1; j < nums.length; j++) {
      for (var k = j+1; k < nums.length; k++){
        total = nums[i] + nums[j] + nums[k]
        if(select(total)) answer++
      }
    }
  }
  return answer
}

function select(total) {
  for (var i = 2; i < total; i++) {
    if (total % i == 0) return false
  }
  return total>1
}
