import { expect } from "playwright/test"

export class CheckoutInfoPage {
    firstNameField = '[data-test="firstName"]'
    lastNameField = '[data-test="lastName"]'
    zipField = '[data-test="postalCode"]'
    continueButton = '[data-test="continue"]'

    constructor (page) {
        this.page = page
    }

    async fillInfo (firstName, lastName, zip) {
        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.zipField).fill(zip)

        await expect(this.page.locator(this.firstNameField)).toHaveValue(firstName)
        await expect(this.page.locator(this.lastNameField)).toHaveValue(lastName)
        await expect(this.page.locator(this.zipField)).toHaveValue(zip)

        await this.page.locator(this.continueButton).click()

        await expect(this.page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html')
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Overview')
    }
}