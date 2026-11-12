import { expect } from "playwright/test"

export class CheckoutOverview {
    constructor(page) {
        this.page = page
    }

    async movingOn () {
        await this.page.locator('[data-test="finish"]').click()

        await expect(this.page.url()).toBe('https://www.saucedemo.com/checkout-complete.html')
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!')
        await expect(this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')
    } 
}