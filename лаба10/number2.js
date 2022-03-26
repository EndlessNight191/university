let arr = []

for(let i=0; i<=100; i++){
    let number = Math.floor(Math.random() * (7 - 1)) + 1;

    if(number === 1){
        number = 1; arr.push(number)
    }
    if(number === 2){
        number = 2; arr.push(number)
    }
    if(number === 3){
        number = 5; arr.push(number)
    }
    if(number === 4){
        number = 10; arr.push(number)
    }
    if(number === 5){
        number = 20; arr.push(number)
    }
    if(number === 6){
        number = 50; arr.push(number)
    }
    if(number === 7){
        number = 100; arr.push(number)
    }
}

function SimpleCountingSort(A){

    let n = A.length, Count = [], B = [];
    for (let i = 0; i < n; i++) Count[i] = 0;

    for (let i = 0; i < n-1; i++){
        for (let j = i+1; j < n; j++){
            if (A[i] < A[j]) {
                Count[j]++;
            }else{Count[i]++}
        }
    }

    for (let i = 0; i < n; i++) B[Count[i]] = A[i];
    return B;
}

console.log(SimpleCountingSort(arr))