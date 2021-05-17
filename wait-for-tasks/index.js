const { Builder } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();


openWebSites = async () => {
    try {
        await driver.get("http://google.com");
        await driver.get("http://yahoo.com");
    } catch (error) {
        console.log(error)
    }
}