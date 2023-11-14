import {makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._cart = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
        console.log(user)
    }

    setCart(cart) {
        this._cart = cart
    }

    addCartItem(cartItemToAdd) {
         const existingCartItem = this._cart.find(
            cartItem => cartItem.id === cartItemToAdd.id
        );

        if (existingCartItem) {
            this._cart = this._cart.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            );
            localStorage.setItem('cart', JSON.stringify(this._cart))
            return
        }

        this._cart =  [...this._cart, { ...cartItemToAdd, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(this._cart))
    }

    removeCartItem(id) {
        this._cart = this._cart.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(this._cart))
    }

    get cart() {
        return this._cart
    }

    get isAuth() {
        return this._isAuth
    }

    get isAdmin() {
        return this._user.is_admin
    }

    get user() {
        return this._user
    }
}


