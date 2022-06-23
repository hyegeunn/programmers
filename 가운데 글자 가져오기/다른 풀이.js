// 이중배열을 command 로 치환하기

function solution(array, commands) {
  return commands.map(command => {
    const [sPosition, ePosition, position] = command
    const newArray = array
      .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
      .sort((a, b) => a - b)
    return newArray[position -1]
  })
}