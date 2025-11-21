const add_to_cart = document.getElementById("add-to-cart");
const Product_count = document.getElementById("Product_count");
const Product_count_delete = document.getElementById("Product-count-delete");
const count_number_products = document.getElementById("count-number-products");
const plus_count_product = document.getElementById("plus-count-product");
const minus_count_product = document.getElementById("minus-count-product");

let valueNumber = 0;

add_to_cart.addEventListener("click", function () {
    add_to_cart.style.display = "none";
    Product_count.style.display = "inline-block";

    valueNumber++;
    count_number_products.innerText = valueNumber;

    uddateValueDelete();
});

function uddateValueDelete() {
    if (valueNumber <= 1) {
        minus_count_product.style.display = "none";
        Product_count_delete.style.display = "inline-block";
    } else {
        minus_count_product.style.display = "inline-block";
        Product_count_delete.style.display = "none";
    }
}

plus_count_product.addEventListener("click", function () {
    valueNumber++;
    count_number_products.innerText = valueNumber;

    uddateValueDelete();
});

minus_count_product.addEventListener("click", function () {

    if (valueNumber > 1) {
        valueNumber--;
        count_number_products.innerText = valueNumber;

        uddateValueDelete();
    }
});

Product_count_delete.addEventListener("click",function(){
    if(valueNumber == 1){
         valueNumber = 0;
        Product_count.style.display = "none";
        add_to_cart.style.display = "block";
    }
})

// count number products
