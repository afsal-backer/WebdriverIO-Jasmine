const loginDetails = require("../../data/loginDetails");
const { getOneText } = require("../../pages/internet.page");
const internetPage = require("../../pages/internet.page");
const loginData = require("../../data/loginDetails")

describe('Element actions',() =>{
    xit ('Should click', () =>{
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).toBe('https://the-internet.herokuapp.com/abtest')

    })

    xit('Get text after waiting for display',() =>{
        browser.url('/')
        console.log(internetPage.getOneText())

        expect(internetPage.getOneText()).toBe('A/B Testing')
    })

    xit('Click checkbox', ()=>{
        browser.url('/')
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        console.log('Checked the box')
        expect(internetPage.checkboxes(1).isSelected()).toBe(true)
        browser.url('/')

    })

    it('Login', ()=>{
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterUsername(loginDetails.username)
        expect(internetPage.username.getValue()).toBe('Julia')

        internetPage.enterPassword(loginDetails.password)
        expect(internetPage.password.getValue()).toBe('Password')

    })
})