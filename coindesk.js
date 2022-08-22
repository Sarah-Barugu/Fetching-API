'use strict'
// 2. Next create an API for a currency app
// https://api.coindesk.com/v1/bpi/currentprice.json
// Let the fetch function go to the API every 5 seconds, get the currency exchange and append the important details to the html
// Do this inside a new file called currency.html
const curr = document.querySelector('h1')

//fetching this API returns a promise
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//the promise is consumed and converted to  json format
.then ((feedback) => feedback.json())
// another promise consumed returns an object
.then((data) =>  {
  console.log(data)
  console.log(data.bpi)
  //looping through the data feedback from the promise consumed 
  for (const [_, value] of Object.entries(data.bpi)) {
    console.log(value.code, value.symbol, value.rate, value.description, value.rate_float)
    // creating a html container with which the values will be inserted
    const header = `
    <h1>Currency: ${value.code}, Symbol: ${value.symbol}, Rate: ${value.rate}, Description: ${value.description}, Rate_float: ${value.rate_float} </h1>`
    //using the method to append this  to the HTML
    curr.insertAdjacentHTML('beforebegin', header)
  }
})

