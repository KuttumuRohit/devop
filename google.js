const { Builder, By, Key, until } = require('selenium-webdriver');

(async function googleSearch() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.google.com');
        let searchBox = await driver.wait(until.elementLocated(By.name('q')), 5000);
        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);
        await driver.wait(until.titleContains('Selenium WebDriver'), 5000);
        let results = await driver.findElements(By.css('h3'));
        for (let i = 0; i < Math.min(results.length, 5); i++) {
            console.log(await results[i].getText());
        }
        await driver.sleep(5000);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await driver.quit();
    }
})();
