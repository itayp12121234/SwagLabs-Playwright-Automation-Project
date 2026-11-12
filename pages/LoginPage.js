import { expect } from "playwright/test"

export class LoginPage {
    userNameField = '[data-test="username"]'
    passwordField = '[data-test="password"]'
    loginButton = '[data-test="login-button"]'

    constructor(page) {
        this.page = page
    }

    async openLoginPage() {
        await this.page.goto('https://www.saucedemo.com');
        await expect(this.page.url()).toBe('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.locator(this.userNameField).fill(username)
        await this.page.locator(this.passwordField).fill(password)
        
        await expect(this.page.locator(this.userNameField)).toHaveValue(username)
        await expect(this.page.locator(this.passwordField)).toHaveValue(password)
        
        await this.page.locator(this.loginButton).click()
        await expect(this.page.url()).toBe('https://www.saucedemo.com/inventory.html')
        await expect(this.page.locator('[class="app_logo"]')).toHaveText('Swag Labs')
    }
} 
