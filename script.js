function compute()
{
    p = document.getElementById("principal").value;
    
}
 

function getRangeValue(){
    let rate = document.getElementById("rate").value;
    let outPut = document.getElementById("rateValue");

    return outPut.innerHTML = (rate + "%");
}

