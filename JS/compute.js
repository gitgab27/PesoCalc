var total_pricephp= function(){
    var total_pricemb = document.getElementById("mb").value * 10;

    var total_pricephp = document.getElementById("smt").value * 10;

    var total_pricephp = total_pricemb+total_pricephp;
    return alert("Total Price of Items in Pesos: PHP" + total_pricephp);
}