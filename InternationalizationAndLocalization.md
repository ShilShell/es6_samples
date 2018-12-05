```javascript
var numberToFormat = 1234567.89;

var inNumberFormatEN = new Intl.NumberFormat("en-IN");
console.log(inNumberFormatEN.format(numberToFormat));//12,34,567.89

var usNumberFormatEN = new Intl.NumberFormat("en-US");
console.log(usNumberFormatEN.format(numberToFormat));//1,234,567.89
```

```javascript
var currencyToFormat = 1234567.890;

var inCurrencyFormatEN = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
console.log(inCurrencyFormatEN.format(currencyToFormat));//₹ 12,34,567.89

var usCurrencyFormatEN = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
console.log(usCurrencyFormatEN.format(currencyToFormat));//$1,234,567.89

var ukCurrencyFormatEN = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" });
console.log(ukCurrencyFormatEN.format(currencyToFormat));//£1,234,567.89
```