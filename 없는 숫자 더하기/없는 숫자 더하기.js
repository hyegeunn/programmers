function solution(numbers) {
    var answer = 0;
    var answerArray = [0,1,2,3,4,5,6,7,8,9];

    numbers.sort();
    for(var i in numbers){
        for(var j=0; j<answerArray.length; j++){
            if(numbers[i] == answerArray[j]){
                answerArray.splice(j,1);
            }
        }
    }

    for(var i in answerArray){
        answer += answerArray[i];
    }

    return answer;
}