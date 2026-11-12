import { expect } from "playwright/test"

export class MainPage {
    shopCart = '[data-test="shopping-cart-link"]'
    suaceBackpackToCart = '[data-test="add-to-cart-sauce-labs-backpack"]'
    suaceBikeLightToCart = '[data-test="add-to-cart-sauce-labs-bike-light"]'

    constructor(page) {
        this.page = page
    }

    async addItemsToCart () {
        await this.page.locator(this.suaceBackpackToCart).click()
        await this.page.locator(this.suaceBikeLightToCart).click()

        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2')
    }

    async moveToCartPage () {
        await this.page.locator('[data-test="shopping-cart-link"]').click()
       
        await expect(this.page.url()).toBe('https://www.saucedemo.com/cart.html')
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Your Cart')
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2')
    }
}