
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
    return cart
}

function addToCart(item){var price = Math.floor(1+Math.random()*100)+1; while (item.length > 0){

    const product = {[item]: price}
    cart.push(product)

}

    return cart
}

function viewCart(){
    return cart
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
