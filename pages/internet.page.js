class Internet
{
    get pageHeader() { return $('h1.heading')}
    get subHeading() { return $('h2')}
    get pageFooter() { return $('#page-footer')}
    get parent() { return $('ul')}
    get childElements() { return this.parent.$$('li')}
    get firstLink() { return $('ul li:nth-child(1) a')}
    get h3Header() { return $('h3')}
    get username() { return $(`#username`)}
    get password() { return $(`#password`)}

    /**
     * 
     * @param {string} text as username
     */
    enterUsername(text)
    {
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }

     /**
     * 
     * @param {string} text as password
     */
      enterPassword(text)
      {
          this.password.waitForDisplayed()
          this.password.setValue(text)
      }

    link(index) {return $(`ul li:nth-child(${index}) a`)}

    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`)}

    /**
     *  Clicks on link based on the index provided.
     * @param {Number} index of the element
     */
    clickLink(index)
    {
        this.link(index).waitForDisplayed()
        this.link(index).click()
    }

    clickCheckbox(index)
    {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    getLiText()
    {
        this.childElements.filter((element) =>
        {
            console.log(element.getText())
        })
    }

    getOneText()
    {
        this.firstLink.waitForDisplayed()
        console.log('Element displayed')
        return this.firstLink.getText()
    }

    clickOnLink()
    {
        if(this.firstLink.isDisplayed()===true)
        {
            this.firstLink.click()
            console.log('Clicked on the first link.')
        }
       this.h3Header.waitForDisplayed()
    }

    get hereLink() { return $('.example a') }

    /**
     * Click the "click here" link
     */
     clickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }

    get iframeBody() { return $('#tinymce') }
    get iframe() { return $('#mce_0_ifr') }

     /**
     * Enter text in the iframe
     * @param {String} text the text to be entered
     */
      sendTextToBody(text) {
        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.setValue(text)
    }

    get exampleButton() { return $('.example button') }
    deleteButton(index) { return $(`#elements button:nth-child(${index})`) }

    get pageButton() { return $('#checkbox-example button') }

    /** 
     * Click the Page Button
     */
     clickPageButton() {
        this.pageButton.waitForDisplayed()
        this.pageButton.click()
    }

   
}
module.exports = new Internet()