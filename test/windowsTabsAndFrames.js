internetPage = require('../pages/internet.page')

describe('Switch Window', function () {
    xit('Should switch to the next window', () => {
        browser.url(`${browser.options.baseUrl}/windows`)
        internetPage.clickHereLink()
        browser.pause(3000)
        browser.switchWindow(`New Window`)
        
        expect(internetPage.h3Header.getText()).toBe(`New Window`)
    })

    it('Should switch to iframe', () => {
        browser.url(`${browser.options.baseUrl}/iframe`)
        internetPage.h3Header.waitForDisplayed()
        internetPage.iframe.waitForDisplayed()
        browser.switchToFrame(internetPage.iframe)
        internetPage.sendTextToBody('This is the text in the iframe body')
       
        expect(internetPage.iframeBody.getText()).toBe('This is the text in the iframe body')
    })

})