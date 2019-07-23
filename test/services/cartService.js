const cart = require('../db/cart').cart;
class CartService {
    cart = [];
    constructor() {
        this.cart = [];
    }
    _all() {
        return this.cart;
    }
    _add(cart) {
        this.cart.push(cart);
        return this.cart;
    }

    _removeId(id) {
        console.log(id);
        let ind = -1;
        const findItem = this.cart.find((i, index) => {
            ind = index;
            return i.id == id;
        })

        this.cart.splice(ind, 1);
        return this.cart;
    }

    _addQuan(item) {
        let ind = -1;
        const findItem = this.cart.find((i, index) => {
            ind = index;
            return i.id == item.id;
        })

        this.cart[ind].quantity = item.quantity;
        let price = (item.quantity) * (this.cart[ind].price);
        return this.cart;
    }

    _length() {
        return this.cart.length;
    }
}

module.exports.CartService = CartService;