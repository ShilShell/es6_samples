# Internationalization and Localization

## Number formating

```javascript
var numberToFormat = 1234567.89;

var inNumberFormatEN = new Intl.NumberFormat("en-IN");
console.log(inNumberFormatEN.format(numberToFormat));//12,34,567.89

var usNumberFormatEN = new Intl.NumberFormat("en-US");
console.log(usNumberFormatEN.format(numberToFormat));//1,234,567.89
```

## Currency Formating
```javascript
var currencyToFormat = 1234567.890;

var inCurrencyFormatEN = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
console.log(inCurrencyFormatEN.format(currencyToFormat));//₹ 12,34,567.89

var usCurrencyFormatEN = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
console.log(usCurrencyFormatEN.format(currencyToFormat));//$1,234,567.89

var ukCurrencyFormatEN = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" });
console.log(ukCurrencyFormatEN.format(currencyToFormat));//£1,234,567.89
```

## Date Formating
```javascript
var dateToConvert = new Date("2016-01-22");

var usDateFormat = new Intl.DateTimeFormat("en-US");
console.log(usDateFormat.format(dateToConvert));//1/22/2016

var inDateFormat = new Intl.DateTimeFormat("en-IN");
console.log(inDateFormat.format(dateToConvert));//22/1/2016
```