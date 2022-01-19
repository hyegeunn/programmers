// reduce 함수 사용

function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => cur + acc, 0);
}

// includes 함수 사용

function solution(numbers) {
    let answer = 0;
    
    for(let i=0; i<=9; i++) {
        if(!numbers.includes(i)) answer += i;
    }
}