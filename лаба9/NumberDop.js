function name(number){
    let marticeOne = []
    let matriceTwo = []

    for(i=0; i<number; i++){
        marticeOne.push([])
        for(k=0; k<number; k++){
            let count = Math.floor(Math.random() * (1 - 0)) + 0;
            matriceTwo[i][k].push(count)
        }
    }

    for(i=0; i<number; i++){
        matriceTwo.push([])
        for(k=0; k<number; k++){
            let count = Math.floor(Math.random() * (1 - 0)) + 0;
            matriceTwo[i][k].push(count)
        }
    }

    let matricPlus = []
    for(i=0; i<matriceTwo.length; i++){
        matricPlus.push([])
        for(k=0; k<matriceTwo[i].length; k++){

            let count = marticeOne[i][k] + marticeTwo[i][k]
            matricPlus[i][k].push(count)
        }
    }


    let rowsA = marticeOne.length, colsA = marticeOne[0].length,
        rowsB = matriceTwo.length, colsB = matriceTwo[0].length,
        matricMulti = []

    if (colsA !== rowsB) return false;
    for (i = 0; i < rowsA; i++) C[ i ] = [];

        for (k = 0; k < colsB; k++){
            for (i = 0; i < rowsA; i++){
                let t = 0;
                for (j = 0; j < rowsB; j++) {
                    t += A[i][j] * B[j][k];
                    matricMulti[i][k] = t;
                }
            }
        }

    function TransMatric(A) {
        let m = A.length, n = A[0].length
        let MatricTrans = [];
        for (i = 0; i < n; i++){
            MatricTrans[i] = [];
            for (j = 0; j < m; j++) MatricTrans[i][j] = A[j][i];
        }
        return MatricTrans;
    }

}
