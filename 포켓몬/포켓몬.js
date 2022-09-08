function solution(nums) {
  var arr = []
  arr = nums.filter((n, i) => nums.indexOf(n) === i)
  if ((nums.length) / 2 <= arr.length) {
    return (nums.length) / 2
  } else {
    return arr.length
  }
}