import { test } from '@playwright/test';
import { PageObject } from '../src/PageObject';

test('Phone Order (One M9)', async ({ page }) => {
    const loginPage = new PageObject(page);
    const username = "zaverecny_ukol";
    const password = "zav3r3cny";
    const name = "Petr";
    const country = "Czech";
    const city = "Prague";
    const card = "123456";
    const month = "11";
    const year = "1995";

    await loginPage.homePage();
    await loginPage.clickLogIn();
    await loginPage.fillUN(username);
    await loginPage.fillPW(password);
    await loginPage.logIn();
    await loginPage.clickPhones();
    await loginPage.clickOneM9();
    await loginPage.clickAddToCart();
    await loginPage.cartPage();
    await loginPage.clickPlaceOrder();
    await loginPage.fillCustomer(name, country, city, card, month, year);
    await loginPage.clickPurchase();
    await loginPage.clickOK();
});