function solution(s) {
  var answer = '';
  var num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var str = []
  let checkStr = (str) => {
    str = str.join("")
    for (var i = 0; i < num.length; i++) {
      if (num[i] === str) {
        str = []
        answer += i
        return 1
      }
    }
    return 0
  }

  for (var i = 0; i < s.length; i++) {
    s.split('')
    if (isNaN(s[i])) {
      str.push(s[i])
      if (checkStr(str) == 1) str = []
    } else {
      answer += s[i]
    }
  }
  return answer
}