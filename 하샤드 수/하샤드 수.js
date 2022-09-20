function solution(x) {
  var answer = x.toString().split('').reduce((a, c) => {
    return parseInt(a) + parseInt(c)
  })
  return x%answer==0 ? true:false
}