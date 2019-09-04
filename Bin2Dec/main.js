 Bin2Dec = function(num) {
    let x = num.toString().split("");
    let y = 0;

    for(let i =0; i<x.length;i++){
        y+=x[i]*(2**(x.length-1-i));
    }
    return y;
}