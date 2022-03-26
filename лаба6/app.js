const fs = require('fs');

// fs.readFile('text.txt', 'utf8', (err, data) => { /// задание с пробелами
//     if (err) {
//         console.error(err)
//         return
//       }
      
//       let space = 0;
//       var rez = data.replace(/ +/g, ' ').trim();
//       console.log(rez)

//       for(i=0; i<data.length; i++){
//         if(data[i] == ' '){
//             if(data[i + 1] == ' '){
//                 space++
//             }
//         }
//       }
      
//       console.log(space + ' сколько пробелов удалено')
// })

let one = 1
let two = Math.pow(2, 1)
fs.writeFileSync('binary.txt', convertToBinary1(one) )
fs.appendFileSync('binary.txt', `\n${convertToBinary1(two)}`)

function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return binary;
}

async function binaryWtite(){
    for(i=2; i<=100; i++){
        let one = i
        let two = Math.pow(2, i)
        fs.appendFileSync('binary.txt', `\n${convertToBinary1(one)}`)
        fs.appendFileSync('binary.txt', `\n${convertToBinary1(two)}`)
    }
}

async function binaryRead(){
    fs.truncate('binary2.txt', err => {
        if(err) throw err; // не удалось очистить файл
        console.log('Файл успешно очищен');
    });

    for(let i=2; i<=200; i++){
        fs.readFile('binary.txt', 'utf8', (err, data) => {
            let line = data.split('\n')[i];
            line = parseInt(line, 2);
            console.log(line)
            fs.appendFileSync('binary2.txt', `\n${line}`)
        });
        i++
    }
}
async function name(){
    await binaryWtite()
    await binaryRead()
}

name() /// задание с бафферами





