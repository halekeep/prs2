function getNumOfValTps(arr) {
    let even = 0;
    let odd = 0;
    let undef = 0;
    let zero = 0;
    let nan = 0;
    let tru = 0;
    let fls = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true || arr[i] === false) {
        if (arr[i] == true) {
          tru++;
          debugger;
        } else {
          fls++;
          debugger;
        }
      } else if (arr[i] % 2 == 0) {
        if (arr[i] == 0) {
          zero++;
          debugger;
        } else if (arr[i] == null) {
          undef++;
          debugger;    
        } else {
          even++;
          debugger; 
        }
      } else if (arr[i] % 2 == 1) {
        odd++;
        debugger;
      } else if (isNaN(arr[i]) && arr[i] !== undefined) {
        nan++;
        debugger;
      } else {
        undef++;
        debugger;
      }   
    }
    console.log('Чётных ' + even);
    console.log('Нечётных ' + odd);
    console.log('Нулей ' + zero);
    console.log('Неопределено ' + undef);
    console.log('Не число ' + nan);
    console.log('Правда ' + tru);
    console.log('Неправда ' + fls);
  }
  
  const arr1 = [2, 5, 1, 0, null, NaN, 5, 8, 13, undefined];
  const arr2 = ['go', 'number', 2, false, NaN, undefined, 10, '6'];
  getNumOfValTps(arr1);
  