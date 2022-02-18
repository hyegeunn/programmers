function solution(absolutes, signs) {
    var answer = absolutes.reduce((acc, cur, idx)=>{
        if(signs[idx]== false){
            cur=cur * -1;
        }
        return acc+cur;
    },0);
    return answer;
}