function calculateAverage(){
    let num1 = parseFloat(document.querySelector('#num1').value);
    let num2 = parseFloat(document.querySelector('#num2').value);
    let num3 = parseFloat(document.querySelector('#num3').value);
    let average = (num1 + num2 + num3)/3;
    console.log(average);

}