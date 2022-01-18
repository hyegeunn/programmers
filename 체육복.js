function solution(n, lost, reserve) {

    var answer = n - lost.length;
    lost.sort();
    reserve.sort();
    for(var i=0; i<lost.length; i++){
        for(var j=0; j<reserve.length; j++){
            if(lost[i] == reserve[j]){
                answer++;
                lost[i] = reserve[j] = -1;
                break;   
            }   
        }
    }

    for(var i=0; i<lost.length; i++){
        if(lost[i]>0){
            for(var j=0; j<reserve.length; j++){
                if(lost[i]-1 == reserve[j] || lost[i]+1 == reserve[j]){
                    answer ++;
                    lost[i] = reserve[j] = -1;
                    break;   
                }   
            }     
        } 
    }
    return answer;
}