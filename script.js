function compute()
{

const this_year = new Date().getFullYear();    
const solution = document.getElementById('solution');
const p = document.getElementById("principal").value;
const rate = document.getElementById("rate").value;
const years = document.getElementById("years").value;
const equation = p * (1 + ((rate/100)*years))

let answer = equation - p;


   solution.innerHTML = "<span class='answers'> If you deposit " + p +   "<br/>" 
   solution.innerHTML += "at an interest rate of " + rate +   "<br/>"                           
   solution.innerHTML += "You will receive an amount of " + answer +   "<br/>" 
   solution.innerHTML += "in the year " + (this_year + parseInt(years)) + "</span>"
   console.log(this_year + parseInt(years));
   console.log("Hi")
   return solution.innerHtml
}
 

function getRangeValue(){
    let rate = document.getElementById("rate").value;
    let outPut = document.getElementById("rateValue");

    return outPut.innerHTML = (rate + "%");
}

