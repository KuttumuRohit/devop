const { Builder, By, Key, until } = require('selenium-webdriver');

(async function automateForm() {
    // Build the WebDriver instance
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to your local site
        await driver.get('http://127.0.0.1:5500/index.html');

        // Wait for 5 seconds on the page before interacting
        await driver.sleep(5000); // 5000 milliseconds = 5 seconds

        // Fill out the 'name' field
        await driver.findElement(By.id('name')).sendKeys('John Doe');

        // Wait for 2 seconds before the next action
        await driver.sleep(2000);

        // Fill out the 'number' field
        await driver.findElement(By.id('number')).sendKeys('123a567890');

        // Wait for 2 seconds before the next action
        await driver.sleep(2000);

        // Fill out the 'email' field
        await driver.findElement(By.id('email')).sendKeys('johndoe@example.com');

        // Wait for 2 seconds before the next action
        await driver.sleep(2000);

        // Select an option from the dropdown
        await driver.findElement(By.id('event')).sendKeys('DJ CONCERT');

        // Wait for 2 seconds before clicking the submit button
        await driver.sleep(2000);

        // Click the submit button
        await driver.findElement(By.xpath("//button[text()='Submit']")).click();

        // Wait for the alert and accept it
        await driver.wait(until.alertIsPresent(), 5000);
        let alert = await driver.switchTo().alert();
        console.log(await alert.getText());
        await alert.accept();

        // Wait for 3 seconds before closing the browser
        await driver.sleep(3000);

    } catch (err) {
        console.error('Error:', err);
    } finally {
        // Quit the driver
        await driver.quit();
    }
})();
