var initialPrice= document.querySelector("#initial-price");
var quantity= document.querySelector("#quantity");
var currentPrice= document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var Output = document.querySelector("#output");

checkBtn.addEventListener("click", calculateProfitAndLoss);

function calculateProfit(costPrice,sellingPrice,noOfStocks)
{


  var profit= (sellingPrice*noOfStocks)-(costPrice*noOfStocks);
  var profitPercentage = (profit/costPrice)*100;

  /*console.log(profit);
  console.log(profitPercentage);*/
  return [profit,profitPercentage];
}

function calculateLoss(costPrice,sellingPrice,noOfStocks)
{
    

    var loss= (costPrice*noOfStocks)-(sellingPrice*noOfStocks);
    var lossPercentage = (loss/costPrice)*100;
  
    return [loss,lossPercentage];
}

function calculateProfitAndLoss()
{
   var costPrice= Number(initialPrice.value);
   var sellingPrice= Number(currentPrice.value);
   var noOfStocks= Number(quantity.value);


    if(costPrice<sellingPrice)
        {
            var [profit, profitPercentage]= calculateProfit(costPrice,sellingPrice,noOfStocks);
            Output.innerText= `Hey! the profit is ${profit} and the percent is ${profitPercentage}%`;
        }
    else 
        {
            var [loss, lossPercentage]=calculateLoss(costPrice,sellingPrice,noOfStocks);
            Output.innerText= `Oops! the loss is ${loss} and the percent is ${lossPercentage}%`;
        }

}