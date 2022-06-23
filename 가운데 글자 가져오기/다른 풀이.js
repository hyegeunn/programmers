// Math.ceil 을 활용하여 짝수, 홀수 구분
// 짝수 일 경우 2자리, 홀수 일 경우 1자리
function solution(s) {
  return s.substr(Math.ceil(s.length) / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}