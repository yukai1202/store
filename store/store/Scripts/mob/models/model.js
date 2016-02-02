function Category() {
    this.id = -1;
    this.title = "";
}

function Product(_id, _title, _price) {
    this.id = _id;
    this.img = "";
    this.title = _title;
    this.price = _price;
    this.quantity = 1;
}

function ShoppingCart() {
    this.products = [];
    this.totalQuantity = 0;
    this.totalCost = 0.0;
}

var cart = new ShoppingCart();

ShoppingCart.prototype.addProduct = function (prod) {
    var indexCart = this.isProductSelected(prod);
    if (indexCart > -1) {
        this.products[indexCart].quantity++;
    } else {
        this.products.push(prod);
    }
    this.updateTotalQuantityAndCost();
};

ShoppingCart.prototype.isProductSelected = function (prod) {
    var index = -1;
    $.each(this.products, function (_index, obj) {
        if (obj.id === prod.id) {
            index = _index;
            return false;
        }
    });
    return index;
};

ShoppingCart.prototype.updateTotalQuantityAndCost = function () {
    var that = this, _cost = 0, _quatity = 0;
    $.each(this.products, function (index, obj) {
        _cost += obj.quantity * obj.price;
        _quatity += obj.quantity;
    });
     
    that.totalCost = _cost;
    that.totalQuantity = _quatity;
    $(".prod-quantity").text(_quatity);
    $(".prod-cost").text(_cost.toFixed(2));
};

ShoppingCart.prototype.updateTotalCost = function () {

};

ShoppingCart.prototype.minusProduct = function () {

};

ShoppingCart.prototype.removeProduct = function (prod) {
    $.each(this.products, function (index, obj) {
        if (obj.id === prod.id) {
            this.products.splice(index, 1);
            return false;
        }
    });
};