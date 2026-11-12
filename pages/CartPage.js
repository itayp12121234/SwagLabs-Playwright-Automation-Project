import { expect } from "playwright/test";

export class CartPage {
    constructor(page) {
        this.page = page;
    }

    async moveToCheckoutPage() {
        await this.page.locator('[data-test="checkout"]').click();

        await expect(this.page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html')
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information')
    }
}