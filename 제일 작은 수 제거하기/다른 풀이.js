function solution(arr) {
  if (arr.length === 1) {
    return [-1]
  }
  const minValue = Math.min.apply(null, arr)
  const index = arr.findIndex(value => value === minValue)
  arr.splice(index, 1)
  return arr
}