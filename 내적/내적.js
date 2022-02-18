function solution(a, b) {
    var answer = [];
    for(var i=0; i<a.length; i++){
        answer[i] = a[i]*b[i];
    }
    return answer.reduce((acc,cur,idx)=>{return acc+cur;},0);
}
