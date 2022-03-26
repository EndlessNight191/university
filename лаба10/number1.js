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



    function mergeSortMain(A){    /// сортировка слиянием
        const t0 = performance.now();
        let countPermutation = 0;
        let comparisons = 0;

        function merge(left, right) {
            let arr = []
            // Break out of loop if any one of the array gets empty
            while (left.length &amp;&amp; right.length) {
                // Pick the smaller among the smallest element of left and right sub arrays
                comparisons++
                if (left[0] > right[0]) {
                    arr.push(left.shift())
                    countPermutation++
                } else {
                    arr.push(right.shift())
                }
            }

            // Concatenating the leftover elements
            // (in case we didn't go through the entire left or right array)
            return [ ...arr, ...left, ...right ]
        }

        function mergeSort(array) {
            const half = array.length / 2

            // Base case or terminating case
            if(array.length < 2){
                return array
            }

            const left = array.splice(0, half)
            return merge(mergeSort(left),mergeSort(array))
        }

        const t1 = performance.now();
        console.log('слиянием↓↓↓↓');
        console.log(mergeSort(A))
        console.log(t1 - t0, ' milliseconds');
        console.log(countPermutation + 'перестановок');
        console.log(comparisons + 'сравнений');
        console.log(A);    // На выходе сортированный по возрастанию массив A.
        sorterDat.push(A)
    }

    function quickSort(A){ /// быстрая сортировка
        const t0 = performance.now();
        let countPermutation = 0;
        let comparisons = 0;

        function qiuck(A) {
            if (A.length === 0) return [];
            let a = [], b = [], p = A[0];
            for (let i = 1; i < A.length; i++) {
                comparisons++
                if (A[i] > p) {
                    a[a.length] = A[i];
                    countPermutation++
                } else {
                    b[b.length] = A[i];
                }
            }
            return qiuck(a).concat(p, qiuck(b));
        }

        const t1 = performance.now();
        console.log('быстрая↓↓↓↓');
        console.log(t1 - t0, ' milliseconds');
        console.log(countPermutation + 'перестановок');
        console.log(comparisons + 'сравнений');
        console.log(A);
        sorterDat.push(A)
    }

    function HeapSort(A){   /// пирамидальная соритрвока
        const t0 = performance.now();
        let countPermutation = 0;
        let comparisons = 0;


        let n = A.length, index = Math.floor(n/2), j, k, t;


        while (true){
            if (index > 0){
                comparisons++
                t = A[--index];
            }else{
                n--;
                if (n === 0) break;
                t = A[n];  A[n] = A[0];
                countPermutation++
            }

            j = index;  k = j*2+1;
            while (k < n){
                comparisons++
                if (k+1 < n && A[k+1] > A[k]){
                    k++
                }
                if (A[k] < t){
                    countPermutation++
                    A[j] = A[k];  j = k;  k = j*2+1;
                }else break;
            }
            A[j] = t;
        }

        const t1 = performance.now();
        console.log('Шейкером↓↓↓↓');
        console.log(t1 - t0, ' milliseconds');
        console.log(countPermutation + 'перестановок');
        console.log(comparisons + 'сравнений');
        console.log(A);
        sorterDat.push(A)
    }


    let arrInsert = arr.slice()
    let arrShell = arr.slice()
    let arrSheaker = arr.slice()


    mergeSortMain(arrInsert) /// слиянием
    quickSort(arrShell) /// быстрая
    HeapSort(arrSheaker) /// пирамидальная
}

async function sort(){
    for(i=0; i<9; i++){
        const str = fs.readFileSync('text.dat', 'utf8');
        var line = str.split('\n')[i];
        let arrSort = JSON.parse("[" + line + "]");


        for(k=0; k<arrSort.length; k++){
            if(arrSort[k] > arrSort[k+1]){
                console.log( i + ' Массив не приавльно отсортирован')
                break
            }else if(k === arrSort.length - 1){
                console.log( i + ' с этим массивом все круто')
            }
        }
    }
}

(async function(){
    await sortArray()

    console.log('первый массив ↓↓↓')
    await metodSort(arr)

    console.log('второй отсортированный по убыванию массив ↓↓↓')
    await metodSort(arr2)

    console.log('третий отсортированный по возрастанию массив ↓↓↓')
    await metodSort(arr3)

    await fs.writeFile(
        'text.dat',
        sorterDat.map(function(sorterDat){ return sorterDat.join(',') }).join('\n'),
        function (err) { console.log(err ? 'Error :'+err : 'ok') }
    );

    await sort()
}())