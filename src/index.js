
exports.min = function min (array) {
    if(array.length == 0) return 0;
    let result = array[0];
    for(let i in array){
        if ( result > array[i] ) result = array[i];
    }
    return result;
}

exports.max = function max (array) {
      if(array.length == 0) return 0;
    let result = array[0];
    for(let i in array){
        if ( result < array[i] ) result = array[i];
    }
    return result;
}

exports.avg = function avg (array) {
    if(array.length == 0) return 0;
    
}
