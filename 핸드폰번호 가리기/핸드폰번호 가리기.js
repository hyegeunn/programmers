function solution(n) {
  var arr = (n + "").split("")
  for (var i = 0; i < arr.length-4; i++){
    arr[i] = '*'
  }
  return arr.join("")
}