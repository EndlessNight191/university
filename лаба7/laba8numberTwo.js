let word = 'слово'
let string = 'текст со словом слово'


function indexOf(word, string) {
    const t0 = performance.now();

    let comparisons = 0
    var m = 0;
    var i = 0;
    var table = [];
  
    var pos = 2;
    var cnd = 0;
  
    table[0] = -1;
    table[1] = 0;
  
    while (pos < word.length) {
      if (word[pos - 1] == word[cnd]) {
        cnd = cnd + 1;
        table[pos] = cnd;
        pos = pos + 1;
        comparisons++
      } else if (cnd > 0) {
        cnd = table[cnd];
      } else {
        table[pos] = 0;
        pos = pos + 1;
      }
    }
    
    while (m + i < string.length) {
      if (word[i] == string[m + i]) {
        comparisons++
        if (i == word.length - 1) {
            comparisons++;
            const t1 = performance.now();
            console.log(t1 - t0, ' milliseconds');
            console.log(comparisons + ' сравнений');
          return m + ' - Индекс подстроки';
        }
        i = i + 1;
      } else {
          comparisons++
        if (table[i] > -1) {
          m = m + i - table[i];
          i = table[i];
        } else {
          i = 0;
          m = m + 1;
        }
      }
    }
    const t1 = performance.now();
    console.log(t1 - t0, ' milliseconds');
    console.log(comparisons + 'сравнений');
    return -1;
  };


function name(word, string){
    const t0 = performance.now();
    let comparisons = 0
    let n = word.length
    let body = ''

    for(let i=0; i<string.length; i++){
        body += string[i];
        comparisons++;
        if(body === word && (string[i+1] === ' ' || string[i+1] === undefined)){
            console.log(comparisons + ' сравнений');
            const t1 = performance.now();
            console.log(t1 - t0, ' milliseconds');
            return i - n + 2 + ' индекс подстроки'
        }
        if(string[i] === ' '){
            body = ''
        }
    }

    return 'Ничего не найдено'
}


function boyerMure(string, podString){

}


console.log(boyer(word, string))