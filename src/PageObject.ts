import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs,
    PlaywrightWorkerOptions, Page } from "@playwright/test";

export class PageObject {
    protected _page: Page;
    protected _test: TestType<PlaywrightTestArgs&PlaywrightTestOptions, PlaywrightWorkerArgs&PlaywrightWorkerOptions>;
    protected _testConfig: { endpointUrl: string };
    protected _testSecrets: { username: string, password: string };

    constructor(
    page: Page,
    test: TestType <PlaywrightTestArgs&PlaywrightTestOptions, PlaywrightWorkerArgs&PlaywrightWorkerOptions >,
    testConfig: { endpointUrl: string },
    testSecrets: { username: string, password: string }
    ) {
        this._page = page;
        this._test = test;
        this._testConfig = testConfig;
        this._testSecrets = testSecrets;
    }

    async homePage() {
        await this._page.goto('https://www.demoblaze.com/');
    }

    async clickLogIn() {
        await this._page.click('a[id="login2"]');
    }

    async fillUN(username: string) {
        await this._page.fill('#loginusername.form-control', username);
    }

    async fillPW(password: string) {
        await this._page.fill('#loginpassword.form-control', password);
    }

    async logIn() {
        await this._page.click('xpath=//html/body/div[3]/div/div/div[3]/button[2]');
    }

    async clickPhones() {
        await this._page.click('xpath=//html/body/div[5]/div/div[1]/div/a[2]');
    }

    async clickOneM9() {
        await this._page.click('xpath=//html/body/div[5]/div/div[2]/div/div[7]/div/div/h4/a');
    }

    async clickAddToCart() {
        await this._page.click('text="Add to cart"');
    }

    async cartPage() {
        await this._page.goto('https://www.demoblaze.com/cart.html');
    }

    async clickPlaceOrder() {
        await this._page.click('text="Place Order"');
    }

    async fillCustomer(name: string, country: string, city: string, card: string, month: string, year: string) {
        await this._page.fill('#name.form-control', name);
        await this._page.fill('#country.form-control', country);
        await this._page.fill('#city.form-control', city);
        await this._page.fill('#card.form-control', card);
        await this._page.fill('#month.form-control', month);
        await this._page.fill('#year.form-control', year);
    }

    async clickPurchase() {
        await this._page.click('button[onclick="purchaseOrder()"]');
    }

    async clickOK() {
        await this._page.click('text="OK"');
    }

}

