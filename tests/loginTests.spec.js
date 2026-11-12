import { test, expect } from '@playwright/test'
import {users} from '../data/loginVersions.js'

users.forEach((user) => {
    test(`Login test - ${user.name}`, async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill(user.username)
        await page.locator('[data-test="password"]').fill(user.password)
        await page.locator('[data-test="login-button"]').click()

        if (user.login) {
            expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')
        } else {
            await expect(page.locator('[data-test="error"]')).toHaveText(user.expectedError)
        }
    })
})
