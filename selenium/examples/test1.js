//In this example we will navegate through Google and make any search
module.exports = {
    'Test Google':function(browser){
	browser
	.url('http://www.google.com')
	.waitForElementVisible('body',1000)
	.setValue('input[type=text]','nighwatch')
	.waitForElementVisible('button[name=btnG]',1000)
	.click('button[name=btnG]')
	.pause(1000)
	.assert.containsText('#main', 'Night Watch')
	.end();
    }

}
