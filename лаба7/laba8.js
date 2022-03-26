function linearSearch(arr, key){
    let comparisons = 0;
    const t0 = performance.now();
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
            comparisons++
        }else{
            return 'не найдено'
        }
    }
    const t1 = performance.now();
    console.log(t1 - t0, ' milliseconds');
    console.log(comparisons + ' количество сранений')
    return -1
}

function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
    let comparisons = 0
    const t0 = performance.now();
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            comparisons++
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    const t1 = performance.now();
    console.log(t1 - t0, ' milliseconds');
    console.log(comparisons + ' количество сранений')
    return position;
}

function InterpolationSearch(key, arr){
    var mid, low = 0, high = arr.length-1;
    let comparisons = 0
    const t0 = performance.now();
    
    while (arr[low] < key && arr[high] > key){
       mid = low + Math.floor( ((key-arr[low])*(high-low))/(arr[high]-arr[low]) );
       if (arr[mid] < key) low = mid+1;
       else if (arr[mid] > key) high = mid-1;
       else return mid;
    }

    if (arr[low] === key){
        comparisons++
        const t1 = performance.now();
        console.log(t1 - t0, ' milliseconds');
        console.log(comparisons + ' количество сранений')
        return low; 
    }else if (arr[high] === key){
        comparisons++
        const t1 = performance.now();
        console.log(t1 - t0, ' milliseconds');
        console.log(comparisons + ' количество сранений')
        return high; 
    }else{
        const t1 = performance.now();
        console.log(t1 - t0, ' milliseconds');
        console.log(comparisons + ' количество сранений')
        return -1;
    }
}