let arr = new Map([

]);

for(i=2; i<=1000; i++){
    let count = 0

    for(x=0; x<=i; x++){
         let xa= Math.pow(x, 3);

          for(y=0; y<=i; y++){
             let ya= Math.pow(y, 3);

                for(z=0; z<=i; z++){
                    let za= Math.pow(z, 3);

                    var sum = xa + ya + za;
                    

                    if(sum == i && i !== 1 && i !== 2){
                        count++
                    }

                };
            };
            if(count > 2) break
        };
        if(count == 0) {
            // console.log("No such combinations!")
        }else if(count > 2){
            // console.log(i)
            arr.set(i, count);
        }

}

console.log(arr)