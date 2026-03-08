function getShippingMessage(country, price, deliveryFee) {
    
    country = String(country);
     price = Number(price);
    deliveryFee = Number(deliveryFee);

    totalPrice = price + deliveryFee;

    const message = `Shipping to ${country} will cost ${totalPrice} credits`;
    return console.log(message);
}



console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
