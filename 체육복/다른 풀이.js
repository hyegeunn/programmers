// splice 함수 사용
function solution(n, lost, reserve){
    let tmp = reserve.slice();

    for(let i in tmp){
        // reserve 와 lost가 같은 경우 index를 key에 저장
        let key = lost.indexOf(tmp[i]);

        // 만약 같은 값이 있을 경우
        if(key != -1){
            lost.splice(key,1);    //lost의 같은 값을 지운다
            reserve.splice(reserve.indexOf(tmp[i]),1);    //reserve에서 같은 값을 지운다
        }
    }

    for(let i of reserve){
        // lost 앞,뒤에 reserve가 있는지 찾는다
        let key = lost.includes(i-1) ? lost.indexOf(i-1) : lost.indexOf(i+1);
        if(key != -1){
            lost.splice(key, 1);
        }
    }
    return n-lost.length;
}