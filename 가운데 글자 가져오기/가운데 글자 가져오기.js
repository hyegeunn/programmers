// .sort((a, b) => a-b) 
// 문자열로 인식할 수 있어서 값 비교를 해줘야한다.

function solution(array, commands) {
  var answer = [];
  var result = [];
  for (let i in commands) {
    var arr = [];
    arr = commands[i];
    result = array.slice(arr[0] - 1, arr[1]);
    result.sort((a, b) => a - b);
    answer.push(result[arr[2] - 1]);
  }
  return answer;
}