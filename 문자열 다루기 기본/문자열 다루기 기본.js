function solution(s) {
  var arr = s.split("")
  if ((s.length == 4 || s.length == 6)) {
    for (var i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return false
      }
    }  
    return true
  } else {
    return false
  }
}