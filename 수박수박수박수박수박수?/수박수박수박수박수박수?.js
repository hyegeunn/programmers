function solution(n) {
  var answer = '수박';
  var cnt = parseInt(n / 2);
  for (var i = 0; i < cnt; i++) {
    answer += '수박';
  }
  if (n % 2 != 0) answer = answer.slice(0, -1);
  if (n % 2 == 0) answer = answer.slice(0, -2);
  return answer;
}