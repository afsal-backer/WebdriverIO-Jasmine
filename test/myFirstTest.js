describe("to open heroku app",function()
{
    xit("open the homepage",function()
    {
        browser.url('https://the-internet.herokuapp.com/')
        const title = browser.getTitle()
        expect(title).toBe('The Internet')

        browser.setTimeouts(30000, 40000, 120000)

        let timeout = browser.getTimeouts()
        console.log('Timeout is :'+JSON.stringify(timeout))

        var currentURL = browser.getUrl()
        console.log("Current url is: "+currentURL)

        browser.navigateTo('https://test.salesforce.com')
        currentURL = browser.getUrl()
        console.log("Current url is: "+currentURL)
        
        browser.refresh()
        console.log('Refreshed')
        currentURL = browser.getUrl()
        console.log("Current url is: "+currentURL)

        browser.back()
        console.log('Gone back to heroku')
        currentURL = browser.getUrl()
        console.log("Current url is: "+currentURL)

        browser.forward()
        console.log('Gone forward to Salesfoce')
        currentURL = browser.getUrl()
        console.log("Current url is: "+currentURL)



    })

    xit("Window handles",function(){
        browser.url('https://the-internet.herokuapp.com/windows')

        let parentWindowHandle = browser.getWindowHandle()
        console.log('Window handle is: '+parentWindowHandle)

        $('//a[@href="/windows/new"]').click()
        console.log('Clicked on new window button')

        let childWindowHandle = browser.getWindowHandle()
        console.log('Child window handle is: '+childWindowHandle)

        browser.switchToWindow(childWindowHandle);
        console.log('Switched to child window handle.')

        let childTitle = $('//div[@class="example"]//h3').getText()
        console.log('Child title is: '+childTitle)

        expect(childTitle).toBe('Opening a new window')

        browser.newWindow('https://test.salesforce.com')

    })

    it('Switch to iFrame', function()
    {
        browser.url('https://the-internet.herokuapp.com/iframe')
        console.log('Switching to iFrame now')

        browser.switchToFrame($('//iframe[@id="mce_0_ifr"]'))
        console.log('Switched to iFrame')

        $('//p[text()="Your content goes here."]').clearValue()
        console.log('Cleared text.')

        $('//body[@id="tinymce"]').setValue('Hello')
        console.log('Added text.')

        browser.switchToParentFrame()
    })
})