function solution(n) {
    
    var answer = [];
    n = n.toString();

    for(var i=0; i<n.length; i++){
        answer[i] = parseInt(n[i]);
    }
    answer = answer.reverse();
    return answer;
}