// обьект покупка  + дата покупки, клиент
// название товара, количесво товара, цена за 1 единицу

// 1 подсчитать стоимость покупки
// 2 начислить скидку 5% если сумма итоговая больше 1000 грн

let order = {
    date: '01-01-2023', 
    customer: 'Tomas',
    product: 'pen',
    count: 1000,
    price: 12.5,
    sum: 0,
    totalSum: function(){
        this.sum = this.price * this.count;
        return this.sum;
    },
    sale: function(limit, prSale){
        if(this.sum >= limit){
            this.sum *= (100-prSale)/100;
        }
        return this.sum;
    }    

}

order.sum();
order.sale(1000,5);




/*
let purchase = {
  date: new Date(), // Дата покупки
  customer: 'Tomas', // Клиент
  items: [ // Массив товаров
    { name: 'Книга', quantity: 2, price: 100 },
    { name: 'Ручка', quantity: 5, price: 10 },
    { name: 'Тетрадь', quantity: 3, price: 50 }
  ],
 
  getTotalCost() {
    let totalCost = 0; // Итоговая стоимость покупки

    for (let item of this.items) {
      totalCost += item.price * item.quantity;
    }
    
    if (totalCost > 1000) {
      totalCost *= 0.95;
    }
 
    return totalCost.toFixed(2);
  }
};


console.log(Дата покупки: ${purchase.date.toLocaleDateString()});
console.log(Клиент: ${purchase.customer});
console.log('Список товаров:');
for (let item of purchase.items) {
  console.log(${item.name}: ${item.quantity} шт. по ${item.price} грн);
}
console.log(Итоговая стоимость покупки: ${purchase.getTotalCost()} грн);
*/