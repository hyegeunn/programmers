function solution(board, moves) {
  var result = 0
  var basket = []
  for (var i = 0; i < moves.length; i++) {
    var num = moves[i]
    for (var j = 0; j < board.length; j++) {
      if (board[j][num - 1] != 0) {
        basket.push(board[j][num - 1])
        var data = crush(basket, result)
        basket = data[0]
        result = data[1]
        board[j][num - 1] = 0
        break
      }
    }
  }
  return result
}

function crush(basket, result) {
  for (var i = 1; i < basket.length; i++) {
    if (basket.length != 1 && basket[i] == basket[i - 1]) {
      basket.splice(i - 1, 2)
      result += 2
    }
  }
  return [basket, result]
}