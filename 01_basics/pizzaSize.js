let numberOfGuest = 4

// Small <=2, Medium <=5, Large 
let pizzaSize;

if(numberOfGuest<=2){
    pizzaSize = "Small"
}
else if(numberOfGuest <=5){
    pizzaSize = "Medium"
}

else{
    pizzaSize = "Large"
}

 console.log(`As we have ${numberOfGuest} guests, we will order a ${pizzaSize} size pizza. `)
