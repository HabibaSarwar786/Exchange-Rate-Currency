/*-------------------------------------
Reusable Variabels --------------------
---------------------------------------
*/

const currencyOne = document.getElementById('currency-one');
const ammountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const ammountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');



// fech exchange rates  and update the DOM 

function  calculate(){
   currency1 =currencyOne.value;
   currency2=currencyTwo.value;
   fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
   .then(rest => rest.json())
   .then(data=>{
    const rate= data.rates[currency2];
    ammountTwo.value = (ammountOne.value*rate).toFixed(2);
   });

}

// Event lisner

currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
ammountOne.addEventListener('input',calculate);
ammountTwo.addEventListener('input',calculate);
swap.addEventListener('click',function(){
    const temp = currencyOne.value;
    currencyOne.value =currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});


