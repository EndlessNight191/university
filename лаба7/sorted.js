const fs = require('fs');

/*
for(i=0; i<15; i++){
    const str = fs.readFileSync('text.dat', 'utf8');
    var line = str.split('\n')[i];
    let arrSort = JSON.parse("[" + line + "]");
    line = JSON.parse("[" + line + "]");

    arrSort.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        
        return 0;
        }); /// по возрастанию
    
    
    for(i=0; i<arrSort.length; i++){
        if(line[i] !== arrSort[i]){
              console.log('Массив не приавльно отсортирован')
        }else if(i == arrSort.length - 1){
            console.log('Все круто')
        }
    }


}*/

for(i=0; i<15; i++){
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
