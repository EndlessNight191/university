const fs = require('fs');
const sizeOf = require('image-size');

const stats = fs.statSync("image1.bmp")
console.log(stats.size + ' размер в байтах')

sizeOf('image1.bmp', function (err, dimensions) {
    console.log(dimensions.width + ' ширина файла', dimensions.height  + ' высота файла');
});


let arr

fs.readFile("image1.bmp", (err, data) => {
    /*console.log(data.toString())*/
    arr = Array.from(data)
    console.log(arr[2] + ' размер файла в байтах')
    console.log(arr[18] + ' ширина файла')
    console.log(arr[22] + ' высота файла')
    console.log(arr[28] + ' количество бит на пиксель')
    console.log(arr[38] + ' Горизонтальное разрешение')
    console.log(arr[42] + ' Вертикальное разрешение')
    console.log(arr[30] + ' тип сжатия')
})

