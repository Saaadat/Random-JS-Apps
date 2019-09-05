function sumFibs(num) {
    let f0 = 0;
    let sum = 1;
    if(num <= 1){
      return 1;
      //console.log(sum);
    }
      return sumFibs(num-1) + sumFibs(num-2);
  }
  
  console.log(sumFibs(8));