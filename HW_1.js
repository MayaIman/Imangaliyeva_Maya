const firstNum = prompt('Введите первое число');
const secondNum = prompt('Введите второе число');

  if (typeof firstNum !== 'number' ||  typeof secondNum !== 'number'){
        throw new Error ('Некорректный ввод!');

    } else {

        const result = counter(firstNum, secondNum);
        alert(result);
    };

    function counter(firstNum, secondNum) {

        return firstNum.toString(secondNum);
    };

    // второе задание

    const a = prompt('Введите первое число');
    const b = prompt('Введите второе число');

    if (typeof a !== 'number' ){
         throw new Error ('Некорректный ввод!');
    };

    if (typeof b !== 'number'){
        throw new Error ('Некорректный ввод!');

    } else {

     const sumResult = toSum(a, b);
     const divideResult = toDivide(a, b);
      
    alert(`Ответ: ${sumResult}, ${divideResult}`);

    };

    function toSum(a,b){

        return a + b;
    };

    function toDivide(a,b){

        return a/b;
    };
