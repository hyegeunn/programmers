function solution(a, b) {
    var ansArr = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    var date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var sumDate = 0;
    var cnt =0;
    
    for(var i=0; i<a-1; i++){
        sumDate += date[i];
    }
    
    sumDate += b;
    
    cnt = sumDate%7-1;
    
    if(cnt == -1){
        cnt = 6;
    }
    
    return ansArr[cnt];
}