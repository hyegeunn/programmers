function solution(s) {
  var answer = '';
  var idx = parseInt(s.length / 2)
  if (s.length % 2 != 0) {
    answer = s[idx];
  } else if (s.length % 2 == 0) {
    answer = s[idx - 1] + s[idx];
  }
  return answer;
}