import {test} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import {MainPage} from '../pages/MainPage.js'
import {CartPage} from '../pages/CartPage.js'
import {CheckoutInfoPage} from '../pages/CheckoutInfoPage.js'
import {CheckoutOverview} from '../pages/CheckoutOverviewPage.js'


test('sanityTest', async({page}) => {
    const loginPage = new LoginPage(page)
    const mainPage = new MainPage(page)
    const cartPage = new CartPage(page)
    const checkoutInfoPage = new CheckoutInfoPage(page)
    const checkoutOverviewPage = new CheckoutOverview(page)

    await loginPage.openLoginPage()
    await loginPage.login('standard_user', 'secret_sauce')
    await mainPage.addItemsToCart()
    await mainPage.moveToCartPage()
    await cartPage.moveToCheckoutPage()
    await checkoutInfoPage.fillInfo('Itay', 'Peleg', '2010400')
    await checkoutOverviewPage.movingOn()
}) 