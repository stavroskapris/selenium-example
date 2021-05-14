const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox")
const proxy = require("selenium-webdriver/proxy")
const options = new firefox.Options();
const proxyServer = "" //todo paste a proxy ip here 
options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads")
options.setPreference("browser.download.folderList", 2)
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv")



const driver = new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(options)
    .setProxy(proxy.manual({
        http: proxyServer,
        https: proxyServer,
    }))
    .build();

driver.get("https://www.spitogatos.gr")