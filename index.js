var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random());
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
     console.log("Your shopping cart is empty.")
   }else{
     var cartArray = []
     var output = "In your cart, you have"
     for (var i = 0 ; i < cart.length ; i++) {
        var item = Object.keys(cart[i])
        cartArray.push(` ${item} at $${cart[i][item]}`)
      }
   console.log(output + cartArray + ".")
 }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i]);
    total += cart[i][item];
  }
  return total;
}

function removeFromCart(item) {
  var hasItem = false
  for (var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      hasItem = true;
      cart.splice(i, 1);
      return cart;
    }
  }
  if(!hasItem) {
    console.log("That item is not in your cart.");
    return;
  }

}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    return cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
}
