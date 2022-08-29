# Fetching-API
### An Assignment on fetching-API

This is a fetch API function that fetches Data from the url below every 5000 milliseconds.

```
https://api.coindesk.com/v1/bpi/currentprice.json
```

This fetch function goes to the API url every 5000 milliseconds, gets the currency pair and the exchanges rate for the corresponding currency pair, then appends the returned data to the HTML file, which is then displayed on the Browser


* This method includes the use of the fetch() and then() method which returns a promise and then such promises will be consumed by the then() method and the data required is returned

### Syntax
```
fetch('url')
    .then(feedback => feedback.json())
    .then(data => {
        console.log(data)
    })
```
