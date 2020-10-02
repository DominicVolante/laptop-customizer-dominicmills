/* 
This Component creates a variable to convert numbers into US dollar values. 
This variable is used within:
  /Shopping-Cart/Cart-Details/Cart-Items.js, 
  /Shopping-Cart/Cart-Details/Total.js, 
  /Form/Form-Features/Features.js
  */ 


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  export default USCurrencyFormat
  
  
  // This object will allow us to
  // easily convert numbers into US dollar values
  