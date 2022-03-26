function name(str){
    let open = 0;
    for(i=0; i<str.length; i++){
        if(str[i] == '('){
            open++
        }else if(str[i] == ')'){
            open--
        }
    }

    if(open == 0){
        console.log('все ок')
    }else{console.log('все плохо')}
}

name('((2+3)(4-1)))')