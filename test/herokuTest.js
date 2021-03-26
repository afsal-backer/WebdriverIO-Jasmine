const internetPage = require("../pages/internet.page.js")

describe("Test Heroku", function(){

    it("Test homepage elements", function(){

        browser.url('/')

        let text = $('//*[@id="page-footer"]').getText()
        console.log(text)

        internetPage.getLiText()

    })

    it("Footer is displayed", () =>{
        console.log(internetPage.pageFooter.isDisplayed())
    })

    it("Does the header exist", ()=>{
        console.log(internetPage.pageHeader.isExisting())
    })

    it("Footer is displayed in viewport ?", ()=>{
        console.log(internetPage.pageHeader.isDisplayedInViewport())
    })

    it("Is subheader enabled ?", ()=>{
        console.log(internetPage.subHeading.isEnabled())
    })

    it("Click on the first link", ()=>{
        internetPage.clickOnLink()
    })
})