const fs = require('fs')

let arr = []
let arr2 = []
let arr3 = []
let sorterDat = []

for(i=0; i<100_000; i++){
    let number = Math.floor(Math.random( ) * (1000 - 1 + 1)) + 1000
    arr.push(number)
    arr2.push(number)
    arr3.push(number)
}


async function sortArray(){

arr2.sort(function(a,b){ 
    return b - a
}); /// по убыванию

arr3.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    
    return 0;
    }); /// по возрастанию

}   


async function metodSort(arr){


        function BubbleSort(A){// пузырьковая
        const t0 = performance.now();
        let n = A.length;
        let countPermutation = 0
        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-1-i; j++){
                if (A[j+1] > A[j]){
                countPermutation ++
                let t = A[j+1]; 
                A[j+1] = A[j]; 
                A[j] = t; 
                }
            }
        }
        const t1 = performance.now();
        let comparisons = (A.length - 1) * A.length / 2;
        console.log('Пузырьковая↓↓↓↓');
        console.log(t1 - t0, ' milliseconds');
        console.log(countPermutation + 'перестановок');
        console.log(comparisons + 'сравнений');
        console.log(A) ;    // На выходе сортированный по возрастанию массив A.

        sorterDat.push(A)
    }

    function SelectionSort(A){  /// сортировка выбором
        const t0 = performance.now();
        let n = A.length;;
        let countPermutation = 0;
        let comparisons = 0;
        for (let i = 0; i < n-1; i++){
            let min = i;
            for (let j = i+1; j < n; j++){
                comparisons++
                if (A[j] > A[min]) min = j; 
            } 
            let t = A[min]; 
            A[min] = A[ i ]; 
            A[ i ] = t;
            countPermutation++
        }            
        const t1 = performance.now();
        console.log('Выбором↓↓↓↓');
        console.log(t1 - t0, ' milliseconds')
        console.log(countPermutation + 'перестановок');
        console.log(comparisons + 'сравнений');
        console.log(A);    // На выходе сортированный по возрастанию массив A.
        sorterDat.push(A)
    }

    function InsertionSort(A){    /// сортировка вставками
        const t0 = performance.now();
        let n = A.length;
        let countPermutation = 0;
        let comparisons = 0;
        for (let i = 0; i < n; i++){
             let v = A[ i ], j = i-1;
             comparisons++
            while (j >= 0 && A[j] < v){ 
                A[j+1] = A[j]; j--; 
                countPermutation++
            }
        A[j+1] = v;
        }
        const t1 = performance.now();
        console.log('Вставками↓↓↓↓');
        console.log(t1 - t0, ' milliseconds');
        console.log(countPermutation + 'перестановок');
        console.log(comparisons + 'сравнений');             
        console.log(A);    // На выходе сортированный по возрастанию массив A.
        sorterDat.push(A)
    }

    function ShellSort(A){ /// сортировка шеллом
        const t0 = performance.now();
        let n = A.length, i = Math.floor(n/2);
        let countPermutation = 0;
        let comparisons = 0;
        while (i > 0){  
             for (let j = 0; j < n; j++){
                let k = j, t = A[j];
                while (k >= i && A[k-i] < t){
                     A[k] = A[k-i]; 
                     k -= i; 
                     countPermutation++
                     comparisons++
                }
            if (k>=0) comparisons++;
            A[k] = t;
            }
        i = (i==2) ? 1 : Math.floor(i*5/11);
        }
        const t1 = performance.now();
        console.log('Шеллом↓↓↓↓');
        console.log(t1 - t0, ' milliseconds');
        console.log(countPermutation + 'перестановок');
        console.log(comparisons + 'сравнений');
        console.log(A);
        sorterDat.push(A)
    }

    function SheakerSort(A){   /// соритрвока шейкером
        const t0 = performance.now();
        let i = 0, j = A.length-1, s = true, t;
        let countPermutation = 0;
        let comparisons = 0;
        while (i < j && s){
            s = false;
            for (let k = i; k < j; k++){
                comparisons++ 
                if (A[k] < A[k+1]){ 
                    t = A[k]; 
                    A[k] = A[k+1]; 
                    A[k+1] = t; 
                    s = true;
                    countPermutation++
                } 
            }

                j--;
                if (s){
                    s = false;
                    for (let k = j; k > i; k--){ 
                        comparisons++
                        if (A[k] > A[k-1]){ 
                            t = A[k]; 
                            A[k] = A[k-1]; 
                            A[k-1] = t; 
                            s = true; 
                            countPermutation++
                        } 
                    }
                }
        i++;
        }
        const t1 = performance.now();
        console.log('Шейкером↓↓↓↓');
        console.log(t1 - t0, ' milliseconds');
        console.log(countPermutation + 'перестановок');
        console.log(comparisons + 'сравнений');
        console.log(A);
        sorterDat.push(A)
    }

    let arrBubble = arr.slice()
    let arrChoic = arr.slice()
    let arrInsert = arr.slice()
    let arrShell = arr.slice()
    let arrSheaker = arr.slice()

    BubbleSort(arrBubble)
    SelectionSort(arrChoic)
    InsertionSort(arrInsert)
    ShellSort(arrShell)
    SheakerSort(arrSheaker)
}

(async function(){
    await sortArray()

    console.log('первый массив ↓↓↓')
    await metodSort(arr)

    console.log('второй отсортированный по убыванию массив ↓↓↓')
    await metodSort(arr2)

    console.log('третий отсортированный по возрастанию массив ↓↓↓')
    await metodSort(arr3)

    fs.writeFile(
        'text.dat',
        sorterDat.map(function(sorterDat){ return sorterDat.join(',') }).join('\n'),
        function (err) { console.log(err ? 'Error :'+err : 'ok') }
   );
}())





